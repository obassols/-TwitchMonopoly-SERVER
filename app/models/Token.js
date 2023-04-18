const jwt = require('jsonwebtoken');

class Token {
  refreshTokens;
  refreshToken;
  accessToken;
  secret;

  constructor() {
    this.refreshTokens = new Array();
    this.secret = process.env.ACCESS_TOKEN_SECRET
  }

  generateAccessToken(user) {
    this.accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '4800m' });
  }

  generateRefreshToken(user) {
    this.refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '4800m' });
    this.refreshTokens.push(this.refreshToken);
  }

  deleteRefreshToken(token) {
    this.refreshTokens = this.refreshTokens.filter(t => t != token);
  }
}

module.exports = Token;