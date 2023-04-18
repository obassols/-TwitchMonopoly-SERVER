export class AdvanceCard extends Card {
  square;

  constructor(data) {
    super(data);
    this.square = data.square;
  }
}