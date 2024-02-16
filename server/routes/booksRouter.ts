const express = require('express');
const cors = require('cors');
require('dotenv').config()

import { NextFunction, Request, Response } from 'express';
import { getBooks, createBook, updateBook, deleteBook } from '../controllers/booksController';

const booksRouter = express.Router();

booksRouter.use(cors());
booksRouter.use(express.json());

booksRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    getBooks().then((response: any) => {
        res.status(200).send(response);
    })
    .catch((error: Error) => {
        res.status(500).send(error);
    })
});

booksRouter.put('/', (req: Request, res: Response, next: NextFunction) => {
    createBook(req.body).then((response: any) => {
        res.status(201).send(response);
    })
    .catch((error: Error) => {
        res.status(400).send(error);
    })
});

booksRouter.put('/:isbn', (req: Request, res: Response, next: NextFunction) => {
    const isbn = req.params.isbn;
    updateBook(isbn, req.body).then((response: any) => {
        res.status(200).send(response);
    })
    .catch((error: Error) => {
        res.status(400).send(error);
    })
})

booksRouter.delete('/:isbn', (req: Request, res: Response, next: NextFunction) => {
    const isbn = req.params.isbn;
    deleteBook(isbn, req.body).then((response: any) => {
        res.status(204).send(response);
    })
    .catch((error: Error) => {
        res.status(400).send(error);
    })
});

module.exports = booksRouter;