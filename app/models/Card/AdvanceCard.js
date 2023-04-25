const Card = require('./Card');

class AdvanceCard extends Card {
  square;

  constructor(data) {
    super(data);
    this.square = data.subtype.square;
  }
}

module.exports = AdvanceCard;