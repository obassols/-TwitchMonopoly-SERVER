const Database = require('../models/Database');
const db = Database.getInstance();

const all = (async (limit) => {
  try {
    let query, values;
    if (limit) {
      query = 'SELECT * FROM ACCOUNT LIMIT $1';
      values = [limit];
    } else {
      query = 'SELECT * FROM ACCOUNT';
      values = [];
    }
    const accounts = await db.client.query(query, values);
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

const create = (async (account) => {
  try {
    const query = 'INSERT INTO ACCOUNT (email, password, twitch_token) VALUES ($1, $2, $3) RETURNING *';
    const values = [account.email, account.password, account.twitchToken];
    const newAccount = await db.client.query(query, values);
    return newAccount.rows[0];
  } catch (err) {
    console.error(err);
  }
});

const update = (async (email, account) => {
  try {
    const query = 'UPDATE ACCOUNT SET password = $1, twitch_token = $2 WHERE email = $3 RETURNING *';
    const values = [account.password, account.twitchToken, email];
    const updatedAccount = await db.client.query(query, values);
    return updatedAccount.rows[0];
  } catch (err) {
    console.error(err);
  }
});

const remove = (async (email) => {
  try {
    const query = 'DELETE FROM ACCOUNT WHERE email = $1 RETURNING *';
    const values = [email];
    const deletedAccount = await db.client.query(query, values);
    return deletedAccount.rows[0];
  } catch (err) {
    console.error(err);
  }
});

module.exports = {
  all,
  get,
  create,
  update,
  remove,
};

