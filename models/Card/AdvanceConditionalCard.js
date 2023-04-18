export class AdvanceConditionalCard extends Card {
  moves;

  constructor(data) {
    super(data);
    this.moves = data.moves;
  }
}