const express = require('express');
const router = express.Router();

const fileController = require('../controllers/file');

router.get('/', fileController.getFileData);
router.post('/', fileController.createFile, fileController.writeFile);

module.exports = router;