const db = require('../database/game');

const allByAccount = (async (req, res) => {
  try {
    if (!req.params.email) return res.status(400).send('Empty fields');
    const game = await db.allByAccount(req.params.email);
    res.status(200).json(game.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const get = (async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).send('Empty fields');
    const game = await db.get(req.params.id);
    res.status(200).json(game.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const create = (async (req, res) => {
  try {
    if (!req.body.email) return res.status(400).send('Empty fields');
    const game = await db.create(req.body.email);
    res.status(200).json(game.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const update = (async (req, res) => {
  try {
    if (!req.body.id) return res.status(400).send('Empty fields');
    const game = await db.update(req.body);
    res.status(200).json(game.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const remove = (async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).send('Empty fields');
    const game = await db.remove(req.params.id);
    res.status(200).json(game.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

module.exports = {
  allByAccount,
  get,
  create,
  update,
  remove,
};