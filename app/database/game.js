const Database = require('../models/Database');
const db = Database.getInstance();

const allByAccount = (async (email) => {
  try {
    const query = 'SELECT * FROM GAME WHERE account_email = $1';
    const values = [email];
    const games = await db.client.query(query, values);
    return games.rows;
  } catch (err) {
    console.error(err);
  }
});

const get = (async (id) => {
  try {
    const query = 'SELECT * FROM GAME WHERE id = $1';
    const values = [id];
    const game = await db.client.query(query, values);
    if (game.rows.length > 0) return game.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

const getPlayers = (async (id) => {
  try {
    const query = 'SELECT * FROM PLAYER WHERE game_id = $1';
    const values = [id];
    const players = await db.client.query(query, values);
    return players.rows;
  } catch (err) {
    console.error(err);
  }
});

const create = (async (email) => {
  try {
    const query = 'INSERT INTO GAME (id, account_email, taxes, turn) VALUES (DEFAULT, $1, $2, $3) RETURNING *';
    const values = [email, 0, 1];
    const newGame = await db.client.query(query, values);
    return newGame.rows[0];
  } catch (err) {
    console.error(err);
  }
});

const createPlayers = (async (players, gameId) => {
  try {
    const newPlayers = [];
    for await (const [i, player] of players.entries()) {
      const query = 'INSERT INTO PLAYER (position, game_id, name, money, jail, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
      const values = [i + 1, gameId, player.name, 1500, false, player.role];
      const newPlayer = await db.client.query(query, values);
      newPlayers.push(newPlayer.rows[0]);
    }
    return newPlayers;
  } catch (err) {
    console.error(err);
  }
});

const update = (async (game, gameId) => {
  try {
    const query = 'UPDATE GAME SET taxes = $1, turn = $2 WHERE id = $3 RETURNING *';
    const values = [game.taxes, game.turn, gameId];
    const updatedGame = await db.client.query(query, values);
    return updatedGame.rows[0];
  } catch (err) {
    console.error(err);
  }
});

const updatePlayers = (async (players, gameId) => {
  try {
    const updatedPlayers = [];
    for await (const player of players) {
      const query = 'UPDATE PLAYER SET money = $1, jail = $2 WHERE game_id = $3 AND position = $4 RETURNING *';
      const values = [player.money, player.jail, gameId, player.position];
      const updatedPlayer = await db.client.query(query, values);
      updatedPlayers.push(updatedPlayer.rows[0]);
    }
    return updatedPlayers;
  } catch (err) {
    console.error(err);
  }
});

const remove = (async (id) => {
  try {
    const query = 'DELETE FROM GAME WHERE id = $1 RETURNING *';
    const values = [id];
    const deletedGame = await db.client.query(query, values);
    return deletedGame.rows[0];
  } catch (err) {
    console.error(err);
  }
});

const removePlayers = (async (id) => {
  try {
    const query = 'DELETE FROM PLAYER WHERE game_id = $1 RETURNING *';
    const values = [id];
    const deletedPlayers = await db.client.query(query, values);
    return deletedPlayers.rows;
  } catch (err) {
    console.error(err);
  }
});

const getHistory = (async (id) => {
  try {
    const query = 'SELECT * FROM PLAYER_ACTION WHERE player_game_id = $1';
    const values = [id];
    const history = await db.client.query(query, values);
    return history.rows;
  } catch (err) {
    console.error(err);
  }
});

const addPlayerActions = (async (playerActions) => {
  try {
    const query = 'INSERT INTO PLAYER_ACTION (player_position, player_game_id, action) VALUES ($1, $2, $3) RETURNING *';
    let actions = [];
    await playerActions.actions.forEach(async action => {
      const values = [playerActions.id, playerActions.position, action];
      actions += await db.client.query(query, values);
    });
    return actions;
  } catch (err) {
    console.error(err);
  }
});

module.exports = {
  allByAccount,
  get,
  getPlayers,
  create,
  createPlayers,
  update,
  updatePlayers,
  remove,
  removePlayers,
  getHistory,
  addPlayerActions
};