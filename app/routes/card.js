const express = require('express');
const router = express.Router();

const cardController = require('../controllers/cardController');

router.get('/', cardController.all);

router.get('/:id', cardController.get);

router.get('/random/:type', cardController.getRandom);

router.get('/:gameId/:position', cardController.allByPlayer);

router.post('/:gameId/:position/:id', cardController.addToPlayer);

router.delete('/:gameId/:position/:id', cardController.removeFromPlayer);

module.exports = router;