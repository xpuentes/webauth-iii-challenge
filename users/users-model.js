const db = require('../database/dbConfig');

module.exports = {
  register: (newUser) => {
    return db('users').insert(newUser);
  }
}
