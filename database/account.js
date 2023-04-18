const  Database = require('../models/Database');
const db = Database.getInstance();

const getAccount = (async (email) => {
  try {
    const query = 'SELECT * FROM treballadors WHERE email = $1';
    const values = [email];
    const account = await db.client.query(query, values);
    if (account.rows.length > 0) return account.rows[0];
    else return null;
  } catch (err) {
    console.error(err);
  }
});

module.exports = {
  getAccount
};

