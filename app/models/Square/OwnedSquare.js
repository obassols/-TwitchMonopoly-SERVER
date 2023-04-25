class OwnedSquare {
  gameId;
  playerId;
  squareId;
  state; // Owned, mortgaged, etc
  upgrades; // 0 = no upgrades, 1 = 1 upgrade, etc

  constructor(data) {
    this.gameId = data.gameId;
    this.playerId = data.playerId;
    this.squareId = data.squareId;

    // Optional
    this.state = data.state ? data.state : 'owned';
    this.upgrades = data.upgrades ? data.upgrades : 0;
  }
}