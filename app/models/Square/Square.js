export class Square {
  id;
  name;
  shortName;
  type;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.shortName = data.shortName;
    this.type = data.type;
  }
}