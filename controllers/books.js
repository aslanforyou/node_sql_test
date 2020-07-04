const db = require('../db/db');

const randomString = () => Math.random().toString(36).substring(2, 15);
const randomDate = () => new Date().toISOString().substring(0, 10);

const fillDb = async (req, res) => {
    let request = 'INSERT INTO books (title, date, autor, description, image) VALUES ';

    for (let i = 0; i < 100000; i++) {
        request += '(\'' + [randomString(), randomDate(), randomString(), randomString(), randomString()].join('\',\'') + '\'),\n'
    }
    request += '(\'' + [randomString(), randomDate(), randomString(), randomString(), randomString()].join('\',\'') + '\');'

    try {
        await db.query(request);
        res.send('OK');
    } catch (err) {
        res.status(500).send('There was an error on filling books: ' + err);
    }
}

const getBooks = async (req, res) => {
    const params = req.query;

    const limit = params.limit || 10;
    const offset = params.offset || 0;
    const orderField = params.orderField;
    const groupField = params.groupField;
    const order = params.order || 'ASC';

    try {
        let request = `SELECT * FROM books `;
        if (groupField) {
            request = `SELECT ${groupField}, COUNT(*) AS Count FROM books GROUP BY ${groupField} `;
        }
        if (orderField) {
            request += `ORDER BY ${orderField} ${order} `;
        }
        request += `LIMIT ${limit} OFFSET ${offset};`;

        const queryResult = await db.query(request);

        res.send(queryResult);
    } catch (err) {
        console.log("Err on get ", err)
        res.status(500).send(err);
    }
}
const updateBook = async (req, res) => {

}
const addBook = async (req, res) => {
    const params = req.body;
    if (Object.keys(params).length === 0) {
        res.status(400).send('No book params');
    }
    const {title, autor, date, description, image} = params;

    const book = {
        title, autor, date: getDateFromParam(date), description, image
    };

    try {
        const result = await db.query(
            `INSERT into books (title, autor, date, description, image) VALUES 
            ('${book.title}','${book.autor}','${book.date}','${book.description}','${book.image}');`
        );

        res.send(result);
    } catch (err) {
        console.log("Err on add book ", err)
        res.status(500).send(err);
    }
}

const getDateFromParam = date => {
    try{
        return new Date(date).toISOString().substring(0, 10);
    } catch (e) {
        return new Date().toISOString().substring(0, 10);
    }
}

const deleteBook = async (req, res) => {

}

module.exports = {
    fillDb,
    getBooks,
    updateBook,
    addBook,
    deleteBook
}