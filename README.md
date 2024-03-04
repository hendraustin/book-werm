# Book Werm

Book Werm is an inventory management system and, eventually, a point-of-sale integration for bookshops, enabling me to remain in the world of books while simultaneously expanding my ReactJS and TypeScript knowledge!

## Getting Started

### Dependencies

Within both `client` and `server` directories respectively, install dependencies by running:

`npm install`

PostgreSQL is the database of choice for this project, utilizing [pgAdmin4](https://www.pgadmin.org/download/) for its GUI

## Running locally

### Client

Spin up the client with the following commands from the `client` directory:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Server

Spin up the server with the following commands from the `server` directory:

`npx ts-node app.ts`

Runs the Express server on either `process.env.DEV_APP_PORT` or `4000` depending on your `.env` file

NOTE: There is an assumption that locally, you'll be hitting a `books` table, with the following columns:

```
isbn: integer (Primary Key)
author: text
title: text
quantity: integer
```
