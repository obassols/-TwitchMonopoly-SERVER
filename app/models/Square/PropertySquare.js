const Square = require('./Square');
class PropertySquare extends Square {
  price;
  color;
  housePrice;
  rents;

  constructor(data) {
    super(data);
    this.price = data.subtype.price;
    this.color = data.subtype.color;
    this.housePrice = data.subtype.house_price;
    this.rents = data.subtype.rents ? data.subtype.rents : [];
  }
}

module.exports = PropertySquare;