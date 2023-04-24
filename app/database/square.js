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
    const supply = await db.client.query(query, values);ç
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

module.exports = {
  all,
  get,
  getProperty,
  getStation,
  getSupply,
  getTax,
  getGo,
  getJail,
  getRent,
};