export class Account {
  email;
  password;
  twitchToken;

  constructor(data) {
    this.email = data.email;
    this.password = data.password;
    this.twitchToken = data.twitchToken;
  }
}