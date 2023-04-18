export class RentPrice {
  squareId;
  upgrades;
  rent;

  constructor(data) {
    this.squareId = data.squareId;
    this.upgrades = data.upgrades;
    this.rent = data.rent;
  }
}