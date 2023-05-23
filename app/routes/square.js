const express = require('express');
const router = express.Router();

const squareController = require('../controllers/squareController');

router.get('/', squareController.all);

router.get('/:id', squareController.get);

router.get('/:id/rent', squareController.getRents);

router.get('/:id/rent/:upgrades', squareController.getRent);

router.get('/game/:id', squareController.allByGame);

router.get('/:gameId/:position', squareController.allByPlayer);

router.post('/:gameId/:position/:id', squareController.addToPlayer);

router.delete('/:gameId/:position/:id', squareController.removeFromPlayer);

module.exports = router;