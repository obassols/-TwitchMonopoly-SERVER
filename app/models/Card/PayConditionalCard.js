const Card = require('./Card');

class PayConditionalCard extends Card {
  amountHouse;
  amountHotel;

  constructor(data) {
    super(data);
    this.amountHouse = data.subtype.amount_house;
    this.amountHotel = data.subtype.amount_hotel;
  }
}

module.exports = PayConditionalCard;