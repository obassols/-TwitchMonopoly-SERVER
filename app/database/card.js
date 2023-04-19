const Database = require('../models/Database');
const db = Database.getInstance();

const all = (async (limit) => {
  try {
    let query, values;
    if (limit) {
      query = 'SELECT * FROM CARD LIMIT $1';
      values = [limit];
    } else {
      query = 'SELECT * FROM CARD';
      values = [];
    }
    const cards = await db.client.query(query, values);
    return cards.rows;
  } catch (err) {
    console.error(err);
  }
});

const allByType = (async (type, limit) => {
  try {
    let query, values;
    if (limit) {
      query = 'SELECT * FROM CARD WHERE type = $1 LIMIT $2';
      values = [type, limit];
    } else {
      query = 'SELECT * FROM CARD WHERE type = $1';
      values = [type];
    }
    const cards = await db.client.query(query, values);
    return cards.rows;
  } catch (err) {
    console.error(err);
  }
});

const get = (async (id) => {
  try {
    const query = 'SELECT * FROM CARD WHERE id = $1';
    const values = [id];
    const card = await db.client.query(query, values);
    if (card.rows.length > 0) return card.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

module.exports = {
  all,
  allByType,
  get,
};