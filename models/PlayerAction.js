export class PlayerAction {
  gameId;
  playerId;
  turn;
  description;

  constructor(data) {
    this.gameId = data.gameId;
    this.playerId = data.playerId;
    this.turn = data.turn;
    this.description = data.description;
  }
}