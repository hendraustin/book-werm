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
    } catch (error_1) {
        console.error(error_1);
        throw new Error("Internal server error");
    }
};

module.exports = booksRouter;