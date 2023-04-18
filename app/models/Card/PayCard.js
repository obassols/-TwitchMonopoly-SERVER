import { Card } from "./Card";

export class PayCard extends Card {
  amount;
  target;

  constructor(data) {
    super(data);
    this.amount = data.amount;
    this.target = data.target;
  }
}