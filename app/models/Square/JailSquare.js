const Square = require('./Square');
class JailSquare extends Square {
  exitCost;

  constructor(data) {
    super(data);
    this.exitCost = data.subtype.exitCost;
  }
}

module.exports = JailSquare;