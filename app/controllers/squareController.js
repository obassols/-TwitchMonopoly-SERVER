const db = require('../database/square');
const PropertySquare = require('../models/Square/PropertySquare');
const StationSquare = require('../models/Square/StationSquare');
const GoSquare = require('../models/Square/GoSquare');
const JailSquare = require('../models/Square/JailSquare');
const SupplySquare = require('../models/Square/SupplySquare');
const TaxSquare = require('../models/Square/TaxSquare');


const all = (async (req, res) => {
  try {
    const squares = await db.all();
    const typedSquares = [];
    for await (let square of squares) {
      typedSquares.push(await getSubtype(square));
    }
    res.status(200).json(typedSquares);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const allByGame = (async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).send('Empty fields');
    const squares = await db.allByGame(req.params.id);
    const typedSquares = [];
    for await (let square of squares) {
      typedSquares.push(await getSubtype(square));
    }
    res.status(200).json(typedSquares);
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

const getRents = (async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).send('Empty fields');
    const rents = await db.getRents(req.params.id);
    if (!rents || rents.length === 0) return res.status(404).send('Rents not found');
    res.status(200).json(rents);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const getRent = (async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).send('Empty fields');
    const rent = await db.getRent(req.params.id, req.params.upgrades);
    if (rent.length === 0) return res.status(404).send('Rent not found');
    res.status(200).json(rent);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const getSubtype = (async square => {
  switch (square.type) {
    case 'property':
      square.subtype = await db.getProperty(square.id);
      square = new PropertySquare(square);
      break;
    case 'station':
      square.subtype = await db.getStation(square.id);
      square = new StationSquare(square);
      break;
    case 'go':
      square.subtype = await db.getGo(square.id);
      square = new GoSquare(square);
      break;
    case 'jail':
      square.subtype = await db.getJail(square.id);
      square = new JailSquare(square);
      break;
    case 'supply':
      square.subtype = await db.getSupply(square.id);
      square = new SupplySquare(square);
      break;
    case 'tax':
      square.subtype = await db.getTax(square.id);
      square = new TaxSquare(square);
      break;
    default:
      break;
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
  allByGame,
  allByPlayer,
  get,
  getRents,
  getRent,
  addToPlayer,
  removeFromPlayer,
};