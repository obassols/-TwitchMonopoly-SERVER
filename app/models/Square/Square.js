class Square {
  id;
  name;
  shortName;
  type;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.shortName = data.short_name;
    this.type = data.type;
  }
}

module.exports = Square;