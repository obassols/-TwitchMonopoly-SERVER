const Card = require('./Card');

class PayCard extends Card {
  amount;
  target;

  constructor(data) {
    super(data);
    this.amount = data.subtype.amount;
    this.target = data.subtype.target;
  }
}

module.exports = PayCard;