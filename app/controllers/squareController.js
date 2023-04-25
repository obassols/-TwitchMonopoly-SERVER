const db = require('../database/square');

const all = (async (req, res) => {
  try {
    const squares = await db.all();
    res.status(200).json(squares.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const allByPlayer = (async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).send('Empty fields');
    const squares = await db.allByPlayer(req.params.gameId, req.params.postion);
    if (squares.rows.length === 0) return res.status(404).send('Square not found');
    return res.status(200).json(squares);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const get = (async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).send('Empty fields');
    const squares = await db.get(req.params.id);
    if (squares.rows.length === 0) return res.status(404).send('Square not found');
    const square = await getSubtype(squares.rows[0]);
    res.status(200).json(square);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const getRent = (async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).send('Empty fields');
    const rent = await db.getRent(req.params.id, req.params.upgrades);
    if (rent.rows.length === 0) return res.status(404).send('Rent not found');
    res.status(200).json(rent.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const getSubtype = (async square => {
  const squareActions = {
    property: 'getProperty',
    station: 'getStation',
    supply: 'getSupply',
    tax: 'getTax',
    go: 'getGo',
    jail: 'getJail',
  };

  const actionMethod = squareActions[square.type];
  if (actionMethod) {
    square[square.type.toLowerCase()] = await db[actionMethod](square.id);
  }
  return square;
});

const addToPlayer = (async (req, res) => {
  try {
    if (!req.params.id || !req.params.playerId) return res.status(400).send('Empty fields');
    const square = await db.addToPlayer(req.params.id);
    return res.status(200).json(square);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const removeFromPlayer = (async (req, res) => {
  try {
    if (!req.params.id || !req.params.playerId) return res.status(400).send('Empty fields');
    const square = await db.removeFromPlayer(req.params.id);
    return res.status(200).json(square);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});


module.exports = {
  all,
  allByPlayer,
  get,
  getRent,
  addToPlayer,
  removeFromPlayer,
};