const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountController');

router.get('/', accountController.all);

router.get('/:email', accountController.get);

router.post('/', accountController.create);

router.patch('/:email', accountController.update);

router.delete('/:email', accountController.remove);

module.exports = router;