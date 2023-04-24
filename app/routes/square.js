const express = require('express');
const router = express.Router();

const squareController = require('../controllers/squareController');

router.get('/', squareController.all);

router.get('/:id', squareController.get);

module.exports = router;