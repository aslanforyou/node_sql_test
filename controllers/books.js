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

}
const updateBook = async (req, res) => {

}
const addBook = async (req, res) => {

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