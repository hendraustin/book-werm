const express = require('express');
const Pool = require('pg').Pool;
const cors = require('cors');
require('dotenv').config()

import { NextFunction, Request, Response } from 'express';

const pool = new Pool({
    user: process.env.DEV_USER,
    host: process.env.DEV_HOST,
    database: process.env.DEV_POSTGRES_DATABASE,
    password: process.env.DEV_PASSWORD,
    port: process.env.DEV_DATABASE_PORT,
});

const booksRouter = express.Router();

booksRouter.use(cors());
booksRouter.use(express.json());

booksRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    getBooks().then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
});

booksRouter.put('/', (req: Request, res: Response, next: NextFunction) => {
    createBook(req.body).then(response => {
        res.status(201).send(response);
    })
    .catch(error => {
        res.status(400).send(error);
    })
});

booksRouter.put('/:isbn', (req: Request, res: Response, next: NextFunction) => {
    const isbn = req.params.isbn;
    updateBook(isbn, req.body).then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(400).send(error);
    })
})

// TODO: Look into potentially refactoring isbn into query string params instead of request body
booksRouter.delete('/', (req: Request, res: Response, next: NextFunction) => {
    deleteBook(req.body).then(response => {
        res.status(204).send(response);
    })
    .catch(error => {
        res.status(400).send(error);
    })
});


async function getBooks() {
    try {
        return await new Promise(function (resolve, reject) {
            pool.query("SELECT * FROM books", (error: Error, results: any) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(results.rows);
                } else {
                    reject(new Error("No results found"));
                }
            });
        });
    } catch (error) {
        console.error(error);
        throw new Error("Internal server error");
    }
};

async function createBook(requestBody: any) {
    const {isbn, author, title, quantity} = requestBody;
    try {
        await new Promise(function (resolve, reject) {
            pool.query(
                "INSERT INTO books (isbn, author, title, quantity) VALUES ($1, $2, $3, $4) RETURNING *",
                [isbn, author, title, quantity], (error: Error, results: any) => {
                    if (error) {
                        reject(error);
                    }
                    if (results && results.rows) {
                        resolve(`Successfully added ${title}`);
                    } else {
                        reject(new Error("Error adding new title to database"));
                    }
                }
            );
        });
    } catch (error) {
        console.error(error);
        throw new Error("Internal server error");
    }
}

async function updateBook(isbn: string, requestBody: any) {
    const { quantity } = requestBody;
    try {
        await new Promise(function (resolve, reject) {
            pool.query(
                "UPDATE books SET quantity = quantity + $1 WHERE isbn = $2", [quantity, isbn], (error: Error, results: any) => {
                    if (error) {
                        reject(error);
                    }
                    if (results && results.rows) {
                        resolve(`Successfully updated ISBN: ${isbn}`);
                    } else {
                        reject(new Error(`Error updating ISBN ${isbn} in database`));
                    }
                }
            )
        });
    } catch (error) {
        console.error(error);
        throw new Error("Internal server error");
    }
}

async function deleteBook(requestBody: any) {
    const isbn = requestBody.data.isbn;
    try {
        await new Promise(function (resolve, reject) {
            pool.query(
                "DELETE FROM books WHERE isbn = $1", [isbn], (error: Error, results: any) => {
                    if (error) {
                        reject(error);
                    }
                    if (results && results.rows) {
                        resolve(`Successfully removed ISBN: ${isbn}`);
                    } else {
                        reject(new Error("Error deleting ISBN from database"));
                    }
                }
            )
        });
    } catch (error) {
        console.error(error);
        throw new Error("Internal server error");
    }
}

module.exports = booksRouter;