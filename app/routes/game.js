const express = require('express');
const router = express.Router();

const gameController = require('../controllers/gameController');

router.get('/account/:email', gameController.allByAccount); // CHANGE TO TOKEN

router.get('/:id', gameController.get);

router.post('/', gameController.create);

router.patch('/', gameController.update);

router.delete('/:id', gameController.remove);

router.get('/:id/history', gameController.getHistory);

router.post('/history', gameController.addPlayerActions);

module.exports = router;