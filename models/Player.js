export class Player {
  gameId;
  position;
  name;
  money;
  role; // 0 = viewer, 1 = streamer
  squares;
  cards;
  hability;
  habilityCooldown;
  actions;

  constructor(data) {
    this.gameId = data.gameId;
    this.position = data.position;
    this.name = data.name;
    this.money = data.money;
    this.role = data.role;

    // Optional
    this.squares = data.squares ? data.squares : [];
    this.cards = data.cards ? data.cards : [];
    this.hability = data.hability ? data.hability : null;
    this.habilityCooldown = data.habilityCooldown ? data.habilityCooldown : null;
    this.actions = data.actions ? data.actions : [];
  }
}