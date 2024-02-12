const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.DEV_USER,
    host: process.env.DEV_HOST,
    database: process.env.DEV_POSTGRES_DATABASE,
    password: process.env.DEV_PASSWORD,
    port: process.env.DEV_DATABASE_PORT,
});

export async function getBooks() {
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

export async function createBook(requestBody: any) {
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

export async function updateBook(isbn: string, requestBody: any) {
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

export async function deleteBook(requestBody: any) {
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
