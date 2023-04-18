export class StationSquare extends Square {
  price;
  rents;

  constructor(data) {
    super(data);
    this.price = data.price;
    this.rents = data.rents ? data.rents : [];
  }
}