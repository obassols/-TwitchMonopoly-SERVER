const Square = require('./Square');
class GoSquare extends Square {
  amount;

  constructor(data) {
    super(data);
    this.amount = data.subtype.amount;
  }
}

module.exports = GoSquare;