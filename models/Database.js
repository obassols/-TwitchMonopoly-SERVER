const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

class Database {

  // PRIVATE PROPERTIES
  static instance;
  client;

  // PRIVATE CONSTRUCTOR
  constructor() {
    this.client = new Client({
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWD,
      port: process.env.POSTGRES_PORT,
    });
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new Database();
    this.instance.connect();
    return this.instance;
  }

  async connect() {
    await this.client.connect();
  }
}

module.exports = Database;