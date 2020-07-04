const db = require('../db/db');

const randomString = () => Math.random().toString(36).substring(2, 15);
const randomDate = () => new Date().toISOString().substring(0, 10);

const fillDb = async (req, res) => {
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