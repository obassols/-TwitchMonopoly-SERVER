const Database = require('../models/Database');
const db = Database.getInstance();

const all = (async (req, res) => {
  try {
    const query = 'SELECT * FROM ACCOUNT';
    const accounts = await db.client.query(query);
    return accounts.rows;
  } catch (err) {
    console.error(err);
  }
});

const get = (async (email) => {
  try {
    const query = 'SELECT * FROM ACCOUNT WHERE email = $1';
    const values = [email];
    const account = await db.client.query(query, values);
    if (account.rows.length > 0) return account.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

module.exports = {
  all,
  get
};

