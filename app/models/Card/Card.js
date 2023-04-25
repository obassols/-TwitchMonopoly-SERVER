class Card {
  id;
  description;
  type;
  action;

  constructor(data) {
    this.id = data.id;
    this.description = data.description;
    this.type = data.type;
    this.action = data.action;
  }
}

module.exports = Card;