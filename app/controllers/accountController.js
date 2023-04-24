const db = require('../database/account');
const bcrypt = require('bcrypt');

const all = (async (req, res) => {
  try {
    let accounts;
    if (req.query.limit) {
      accounts = await db.all(req.query.limit);
    } else {
      accounts = await db.all();
    }
    res.status(200).json(accounts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const get = (async (req, res) => {
  try {
    if (!req.params.email) return res.status(400).send('Empty fields');
    const account = await db.get(req.params.email);
    if (!account) return res.status(404).send('Account not found');
    res.status(200).json(account);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const create = (async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.twitchToken) return res.status(400).send('Empty fields');
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const account = await db.create(req.body);
    res.status(201).json(account);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const update = (async (req, res) => {
  try {
    if(!req.params.email || !req.body.password || !req.body.twitchToken) return res.status(400).send('Empty fields');
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const account = await db.update(req.params.email, req.body);
    res.status(200).json(account);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const remove = (async (req, res) => {
  try {
    const account = await db.remove(req.params.email);
    res.status(200).json(account);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});


module.exports = {
  all,
  get,
  create,
  update,
  remove
};