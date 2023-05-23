class Square {
  id;
  name;
  shortName;
  type;

  game;
  owner;
  upgrades;
  state;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.shortName = data.short_name;
    this.type = data.type;

    this.game = data.game ? data.game : null;
    this.owner = data.owner ? data.owner : null;
    this.upgrades = data.upgrades ? data.upgrades : null;
    this.state = data.state ? data.state : null;
  }
}

module.exports = Square;