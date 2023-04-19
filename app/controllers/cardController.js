const db = require('../database/card');

const all = (async (req, res) => {
  try {
    let cards;
    if (req.query.limit) {
      cards = await db.all(req.query.limit);
    } else {
      cards = await db.all();
    }
    res.status(200).json(cards.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const get = (async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).send('Empty fields');
    const card = await db.get(req.params.id);
    res.status(200).json(card.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const getRandom = (async (req, res) => {
  try {
    const card = await db.all();
    const randomCard = card.rows[Math.floor(Math.random() * card.rows.length)];
    res.status(200).json(randomCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

module.exports = {
  all,
  get,
  getRandom,
};