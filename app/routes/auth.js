const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.post('/login', authController.login);

//#region TOKEN ROUTES

router.post('/refreshToken', authController.validateToken, authController.refreshToken);

router.get('/logout', authController.validateToken, authController.logout);

//#endregion

module.exports = router;