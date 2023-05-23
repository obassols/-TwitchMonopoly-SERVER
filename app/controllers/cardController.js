const db = require('../database/card');
const AdvanceCard = require('../models/Card/AdvanceCard');
const AdvanceConditionalCard = require('../models/Card/AdvanceConditionalCard');
const FreeJailCard = require('../models/Card/FreeJailCard');
const PayCard = require('../models/Card/PayCard');
const PayConditionalCard = require('../models/Card/PayConditionalCard');

const all = (async (req, res) => {
  try {
    let cards;
    if (req.query.limit) {
      cards = await db.all(req.query.limit);
    } else {
      cards = await db.all();
    }
    const typedCards = [];
    if (cards.length === 0) return res.status(404).send('Card not found');
    else {
      for await (const card of cards) {
        typedCards.push(await getSubtype(card));
      }
    }
    return res.status(200).json(typedCards);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const allByPlayer = (async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).send('Empty fields');
    const cards = await db.allByPlayer(req.params.gameId, req.params.postion);
    const typedCards = [];
    if (cards.rows.length === 0) return res.status(404).send('Card not found');
    else {
      for await (const card of cards) {
        typedCards.push(await getSubtype(card));
      }
    }
    return res.status(200).json(typedCards);
  } catch (err) {
    console.error(err);
  }
});

const get = (async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).send('Empty fields');
    const card = await db.get(req.params.id);
    if (card.rows.length === 0) return res.status(404).send('Card not found');
    const typedCard = await getSubtype(card);
    res.status(200).json(typedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const getRandom = (async (req, res) => {
  try {
    const cards = await db.allByType(req.params.type);
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    const card = await getSubtype(randomCard);
    res.status(200).json(card);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const getSubtype = (async card => {
  switch (card.action) {
    case 'PAY':
      card.subtype = await db.getPayCard(card.id);
      card = new PayCard(card);
      break;
    case 'PAY_CONDITIONAL':
      card.subtype = await db.getPayConditionalCard(card.id);
      card = new PayConditionalCard(card);
      break;
    case 'ADVANCE':
      card.subtype = await db.getAdvanceCard(card.id);
      card = new AdvanceCard(card);
      break;
    case 'ADVANCE_CONDITIONAL':
      card.subtype = await db.getAdvanceConditionalCard(card.id);
      card = new AdvanceConditionalCard(card);
      break;
    case 'FREE_JAIL':
      card.subtype = await db.getFreeJailCard(card.id);
      card = new FreeJailCard(card);
      break;
    default:
      break;
  }
  return card;
});

const addToPlayer = (async (req, res) => {
  try {
    if (!req.params.id || !req.params.playerId) return res.status(400).send('Empty fields');
    const card = await db.addToPlayer(req.params.gameId, req.params.positon, req.params.id);
    res.status(200).json(card.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const removeFromPlayer = (async (req, res) => {
  try {
    if (!req.params.id || !req.params.playerId) return res.status(400).send('Empty fields');
    const card = await db.removeFromPlayer(req.params.gameId, req.params.positon, req.params.id);
    res.status(200).json(card.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

module.exports = {
  all,
  allByPlayer,
  get,
  getRandom,
  addToPlayer,
  removeFromPlayer,
};