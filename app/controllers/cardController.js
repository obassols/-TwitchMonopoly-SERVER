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
    const cards = await db.allByType(req.params.type);
    const randomCard = cards.rows[Math.floor(Math.random() * cards.rows.length)];
    const card = await getSubtype(randomCard);
    res.status(200).json(card);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const getSubtype = (async card => {
  const cardActions = {
    'PAY': 'getPayCard',
    'PAY_CONDITIONAL': 'getPayConditionalCard',
    'ADVANCE': 'getAdvanceCard',
    'ADVANCE_CONDITIONAL': 'getAdvanceConditionalCard',
    'FREE_JAIL': 'getFreeJailCard',
  };

  const actionMethod = cardActions[card.action];
  if (actionMethod) {
    card[card.action.toLowerCase()] = await db[actionMethod](card.id);
  }
  return card;
});

module.exports = {
  all,
  get,
  getRandom,
};