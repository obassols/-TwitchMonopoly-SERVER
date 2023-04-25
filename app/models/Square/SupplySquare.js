const Square = require('./Square');
class SupplySquare extends Square {
  price;
  rents;

  constructor(data) {
    super(data);
    this.price = data.subtype.price;
    this.rents = data.subtype.rents ? data.subtype.rents : [];
  }
}

module.exports = SupplySquare;