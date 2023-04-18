export class PropertySquare extends Square {
  price;
  housePrice;
  rents;

  constructor(data) {
    super(data);
    this.price = data.price;
    this.housePrice = data.housePrice;
    this.rents = data.rents ? data.rents : [];
  }
}