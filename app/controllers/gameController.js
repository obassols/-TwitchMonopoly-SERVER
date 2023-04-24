const db = require('../database/game');

const allByAccount = (async (req, res) => {
  try {
    if (!req.params.email) return res.status(400).send('Empty fields');
    const games = await db.allByAccount(req.params.email);
    res.status(200).json(games);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const get = (async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).send('Empty fields');
    const game = await db.get(req.params.id);
    const players = await db.getPlayers(game.id);
    game.players = players;
    res.status(200).json(game);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const create = (async (req, res) => {
  try {
    if (!req.body.email || !req.body.players) return res.status(400).send('Empty fields');
    if (req.body.players.length !== 4) return res.status(400).send('Invalid number of players');
    const game = await db.create(req.body.email);
    const players = await db.createPlayers(req.body.players, game.id);
    game.players = players;
    res.status(200).json(game);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const update = (async (req, res) => {
  try {
    if (!req.body.id) return res.status(400).send('Empty fields');
    const game = await db.update(req.body);
    const players = await db.updatePlayers(req.body.players, req.body.id);
    game.players = players;
    res.status(200).json(game);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const remove = (async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).send('Empty fields');
    const game = await db.remove(req.params.id);
    const players = await db.removePlayers(req.params.id);
    game.players = players;
    res.status(200).json(game);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const getHistory = (async (req, res) => {
  try {
    if (!req.params.id) return res.status(400).send('Empty fields');
    const game = await db.getHistory(req.params.id);
    let history;
    history.id = game.rows[0].player_game_id;
    history.player1 = game.rows.filter(row => row.player_position === 1);
    history.player2 = game.rows.filter(row => row.player_position === 2);
    history.player3 = game.rows.filter(row => row.player_position === 3);
    history.player4 = game.rows.filter(row => row.player_position === 4);
    res.status(200).json(history);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

const addPlayerActions = (async (req, res) => {
  try {
    if (!req.body.id && !req.body.position && !req.body.actions) return res.status(400).send('Empty fields');
    const game = await db.addPlayerActions(req.body);
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
  getHistory,
  addPlayerActions,
};