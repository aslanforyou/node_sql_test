const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books');

router.get('/generate', booksController.fillDb);

router.get('/', booksController.getBooks);
router.post('/', booksController.addBook);
router.put('/', booksController.updateBook);
router.delete('/', booksController.deleteBook);

module.exports = router;