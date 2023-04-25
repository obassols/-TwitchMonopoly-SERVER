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

const getPayCard = (async (id) => {
  try {
    const query = 'SELECT * FROM PAY_CARD WHERE card_id = $1';
    const values = [id];
    const payCard = await db.client.query(query, values);
    if (payCard.rows.length > 0) return payCard.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

const getPayConditionalCard = (async (id) => {
  try {
    const query = 'SELECT * FROM PAY_CONDITIONAL_CARD WHERE card_id = $1';
    const values = [id];
    const payConditionalCard = await db.client.query(query, values);
    if (payConditionalCard.rows.length > 0) return payConditionalCard.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

const getAdvanceCard = (async (id) => {
  try {
    const query = 'SELECT * FROM ADVANCE_CARD WHERE card_id = $1';
    const values = [id];
    const advanceCard = await db.client.query(query, values);
    if (advanceCard.rows.length > 0) return advanceCard.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

const getAdvanceConditionalCard = (async (id) => {
  try {
    const query = 'SELECT * FROM ADVANCE_CONDITIONAL_CARD WHERE card_id = $1';
    const values = [id];
    const advanceConditionalCard = await db.client.query(query, values);
    if (advanceConditionalCard.rows.length > 0) return advanceConditionalCard.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

const getFreeJailCard = (async (id) => {
  try {
    const query = 'SELECT * FROM FREE_JAIL_CARD WHERE card_id = $1';
    const values = [id];
    const freeJailCard = await db.client.query(query, values);
    if (freeJailCard.rows.length > 0) return freeJailCard.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

const addToPlayer = (async (gameId, position, id) => {
  try {
    const query = 'INSERT INTO PLAYER_CARD (game_id, position, card_id) VALUES ($1, $2, $3) RETURNING *';
    const values = [gameId, position, id];
    const addedCard = await db.client.query(query, values);
    return addedCard.rows[0];
  } catch (err) {
    console.error(err);
  }
});

const removeFromPlayer = (async (gameId, position, id) => {
  try {
    const query = 'DELETE FROM PLAYER_CARD WHERE game_id = $1 AND position = $2 AND card_id = $3';
    const values = [gameId, position, id];
    const removedCard = await db.client.query(query, values);
    return removedCard.rows[0];
  } catch (err) {
    console.error(err);
  }
});

module.exports = {
  all,
  allByType,
  get,
  getPayCard,
  getPayConditionalCard,
  getAdvanceCard,
  getAdvanceConditionalCard,
  getFreeJailCard,
  addToPlayer,
  removeFromPlayer
};