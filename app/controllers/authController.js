const db = require('../database/account');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Token = require('../models/Token');
const token = new Token();

const login = (async (req, res) => {
  try {
    // Check if fields are empty
    if (req.body.email && req.body.password) {
      // Check if account exists
      const account = await db.get(req.body.email);
      if (!account) res.status(404).send('Email or password not valid');
      else {

        // Check if password is correct
        const account = treballadors.rows[0];
        if (await bcrypt.compare(req.body.passwd, account.passwd)) {

          token.generateAccessToken({ email: account.email });
          token.generateRefreshToken({ email: account.email });
          console.log('Login ' + account.email);
          return res.json({ accessToken: token.accessToken, refreshToken: token.refreshToken, account: account });
        } else {
          return res.status(404).send('Name or password not valid');
        }
      }
    } else {
      return res.status(400).send('Empty fields');
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal server error');
  }
});

//#endregion TOKEN FUNCTIONS

const validateToken = (async (req, res, next) => {
  try {
    // Check if token exists
    if (req.headers["authorization"]) {
      // Check if token is valid
      const accessToken = req.headers["authorization"].split(' ')[1];
      if (accessToken == null) res.status(401).send("Unauthorized");
      else {
        // Verify if token is between the ones we have stored
        jwt.verify(accessToken, token.secret, (err, account) => {
          if (err) {
            res.status(401).send("Unauthorized");
          } else {
            console.log("Access Token: " + accessToken)
            req.account = account;
            next();
          }
        });
      }
    } else {
      res.status(401).send("Unauthorized");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal server error');
  }
});

const refreshToken = (async (req, res) => {
  try {
    // Check if token exists
    if (!token.refreshTokens.includes(req.body.token)) res.status(400).send("Refresh token invalid");
    else {
      // Delete old refresh token and generate new ones
      token.deleteRefreshToken(req.body.token);
      token.generateAccessToken(({ dni: req.treballador.dni, categoria: req.treballador.categoria, rol: req.treballador.rol }));
      token.generateRefreshToken({ dni: req.treballador.dni });
      // Return new tokens
      console.log('Refresh token ' + token);
      res.json({ accessToken: token.accessToken, refreshToken: token.refreshToken });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal server error');
  }
})

const logout = (async (req, res) => {
  // Check if token exists
  if (req.headers["authorization"]) {
    // Delete refresh token
    const accessToken = req.headers["authorization"].split(' ')[1];
    token.deleteRefreshToken(accessToken);
    res.status(204).send("Logged out!");
  } else {
    res.status(401).send("Unauthorized");
  }
})

//#endregion

module.exports = {
  login,
  // TOKEN FUNCTIONS
  validateToken,
  refreshToken,
  logout
}