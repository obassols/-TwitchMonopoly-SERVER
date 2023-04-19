const express = require('express');
const router = express.Router();

const cardController = require('../controllers/cardController');

router.get('/', cardController.all);

router.get('/:id', cardController.get);

router.get('/random', cardController.getRandom);

module.exports = router;