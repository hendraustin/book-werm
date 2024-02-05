const express = require('express');
const app = express();
const Pool = require('pg').Pool;
const PORT = process.env.PORT || 4000

require('dotenv').config()

const pool = new Pool({
    user: process.env.DEV_USER,
    host: process.env.DEV_HOST,
    database: process.env.DEV_DATABASE,
    password: process.env.DEV_PASSWORD,
    port: process.env.DEV_PORT,
});

async function getBooks() {
    try {
        return await new Promise(function (resolve, reject) {
            pool.query("SELECT * FROM books", (error, results) => {
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

app.use(express.json());

app.get('/', (req, res, next) => {
    getBooks().then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
});

app.listen(PORT, () => {
    console.log("App running!");
});