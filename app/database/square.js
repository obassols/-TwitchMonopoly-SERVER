const Database = require('../models/Database');
const db = Database.getInstance();

const all = (async () => {
  try {
    const query = 'SELECT * FROM SQUARE';
    const values = [];
    const squares = await db.client.query(query, values);
    return squares.rows;
  } catch (err) {
    console.error(err);
  }
});

const allByGame = (async (gameId) => {
  try {
    const query = `
    SELECT *
      FROM SQUARE
      LEFT JOIN PLAYER_SQUARE ON SQUARE_ID = ID
        AND PLAYER_GAME_ID = $1
    ORDER BY ID
    `;
    const values = [gameId];
    const squares = await db.client.query(query, values);
    return squares.rows;
  } catch (err) {
    console.error(err);
  }
});


const allByPlayer = (async (gameId, playerId) => {
  try {
    const query = 'SELECT * FROM PLAYER_SQUARE WHERE game_id = $1 AND player_id = $2';
    const values = [gameId, playerId];
    const squares = await db.client.query(query, values);
    return squares.rows;
  } catch (err) {
    console.error(err);
  }
});

const get = (async (id) => {
  try {
    const query = 'SELECT * FROM SQUARE WHERE id = $1';
    const values = [id];
    const square = await db.client.query(query, values);
    if (square.rows.length > 0) return square.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

const getProperty = (async (id) => {
  try {
    const query = 'SELECT * FROM PROPERTY WHERE square_id = $1';
    const values = [id];
    const property = await db.client.query(query, values);
    if (property.rows.length > 0) return property.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

const getStation = (async (id) => {
  try {
    const query = 'SELECT * FROM STATION WHERE square_id = $1';
    const values = [id];
    const station = await db.client.query(query, values);
    if (station.rows.length > 0) return station.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

const getSupply = (async (id) => {
  try {
    const query = 'SELECT * FROM SUPPLY WHERE square_id = $1';
    const values = [id];
    const supply = await db.client.query(query, values);
    if (supply.rows.length > 0) return supply.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

const getTax = (async (id) => {
  try {
    const query = 'SELECT * FROM TAX WHERE square_id = $1';
    const values = [id];
    const tax = await db.client.query(query, values);
    if (tax.rows.length > 0) return tax.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

const getGo = (async (id) => {
  try {
    const query = 'SELECT * FROM GO WHERE square_id = $1';
    const values = [id];
    const go = await db.client.query(query, values);
    if (go.rows.length > 0) return go.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

const getJail = (async (id) => {
  try {
    const query = 'SELECT * FROM JAIL WHERE square_id = $1';
    const values = [id];
    const jail = await db.client.query(query, values);
    if (jail.rows.length > 0) return jail.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

const getRents = (async (id) => {
  try {
    const query = 'SELECT * FROM RENT_PRICE WHERE square_id = $1';
    const values = [id];
    const rents = await db.client.query(query, values);
    if (rents.rows.length > 0) return rents.rows;
    else return null;
  } catch (err) {
    console.error(err);
  }
});

const getRent = (async (id, upgrades) => {
  try {
    const query = 'SELECT * FROM RENT_PRICE WHERE square_id = $1 AND upgrades = $2';
    const values = [id, upgrades];
    const rent = await db.client.query(query, values);
    if (rent.rows.length > 0) return rent.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

const addToPlayer = (async (gameId, position, squareId) => {
  try {
    const query = 'INSERT INTO PLAYER_SQUARE (game_id, player_id, position) VALUES ($1, $2, $3) RETURNING *';
    const values = [gameId, position, squareId];
    const square = await db.client.query(query, values);
    return square.rows[0];
  } catch (err) {
    console.error(err);
  }
});

const removeFromPlayer = (async (gameId, position, squareId) => {
  try {
    const query = 'DELETE FROM PLAYER_SQUARE WHERE game_id = $1 AND player_id = $2 AND position = $3 RETURNING *';
    const values = [gameId, position, squareId];
    const square = await db.client.query(query, values);
    return square.rows[0];
  } catch (err) {
    console.error(err);
  }
});


module.exports = {
  all,
  allByGame,
  allByPlayer,
  get,
  getProperty,
  getStation,
  getSupply,
  getTax,
  getGo,
  getJail,
  getRents,
  getRent,
  addToPlayer,
  removeFromPlayer
};