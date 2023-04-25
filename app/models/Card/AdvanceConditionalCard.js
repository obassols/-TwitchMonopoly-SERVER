const Card = require('./Card');

class AdvanceConditionalCard extends Card {
  amount;

  constructor(data) {
    super(data);
    this.amount = data.subtype.amount;
  }
}

module.exports = AdvanceConditionalCard;