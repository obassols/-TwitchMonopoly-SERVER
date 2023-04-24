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

const create = (async (game) => {
  try {
    const query = 'INSERT INTO GAME (account_email, taxes, turn) VALUES ($1, $2, $3) RETURNING *';
    const values = [game.accountEmail, game.taxes, game.turn];
    const newGame = await db.client.query(query, values);
    return newGame.rows[0];
  } catch (err) {
    console.error(err);
  }
});

const createPlayers = (async (streamer, gameId) => {
  try {
    const players = [];
    for(let i = 0; i < 4; i++) {
      query = 'INSERT INTO PLAYER (role, game_id, position) VALUES ($1, $2, $3) RETURNING *';
      let values;
      if (i === streamer - 1) {
        values = ['streamer', gameId, i + 1];
      } else {
        values = ['chat', gameId, i + 1];
      }
      const newPlayer = await db.client.query(query, values);
      players.push(newPlayer.rows[0]);
    }
    return players;
  } catch (err) {
    console.error(err);
  }
});

      

const update = (async (game) => {
  try {
    const query = 'UPDATE GAME SET taxes = $1, turn = $2 WHERE id = $3 RETURNING *';
    const values = [game.taxes, game.turn, game.id];
    const updatedGame = await db.client.query(query, values);
    return updatedGame.rows[0];
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
  create,
  createPlayers,
  update,
  remove,
  getHistory,
  addPlayerActions
};