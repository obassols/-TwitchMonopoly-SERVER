export class TaxSquare extends Square {
  cost;

  constructor(data) {
    super(data);
    this.cost = data.cost;
  }
}