const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountController');

router.get('/', accountController.all);

router.get('/:email', accountController.get);

router.post('/', accountController.create);

router.patch('/', accountController.update);

router.delete('/', accountController.remove);

module.exports = router;