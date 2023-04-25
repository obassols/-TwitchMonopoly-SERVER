const Card = require('./Card');

class PayConditionalCard extends Card {
  amountHouse;
  amountHotel;

  constructor(data) {
    super(data);
    this.amountHouse = data.subtype.amountHouse;
    this.amountHotel = data.subtype.amountHotel;
  }
}

module.exports = PayConditionalCard;