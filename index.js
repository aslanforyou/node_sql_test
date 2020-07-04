const express = require('express');
const app = express();

const booksRouter = require('./routes/books');

app.use('/books', booksRouter);

app.listen(3000, () => {
    console.log('App listening on port 3000');
});