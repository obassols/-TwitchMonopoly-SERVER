export class JailSquare extends Square {
  exitCost;

  constructor(data) {
    super(data);
    this.exitCost = data.exitCost;
  }
}