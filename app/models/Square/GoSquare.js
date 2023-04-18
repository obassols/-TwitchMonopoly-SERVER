export class GoSquare extends Square {
  amount;

  constructor(data) {
    super(data);
    this.amount = data.amount;
  }
}