const Card = require('./Card');

class FreeJailCard extends Card {
  sellPrice;
  
  constructor(data) {
    super(data);
    this.sellPrice = data.subtype.sell_price;
  }
}

module.exports = FreeJailCard;