const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const PORT = process.env.DEV_APP_PORT || 4000

const booksRouter = require('./routes/booksRouter');
app.use('/books', booksRouter);

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}!`);
});