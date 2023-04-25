const Square = require('./Square');
class TaxSquare extends Square {
  amount;

  constructor(data) {
    super(data);
    this.amount = data.subtype.amount;
  }
}

module.exports = TaxSquare;