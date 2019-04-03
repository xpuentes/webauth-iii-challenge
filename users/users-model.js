const db = require('../database/dbConfig');

module.exports = {
  register: (newUser) => {
    return db('users').insert(newUser);
  },
  findUser: (user) => {
    return db('users').where(user);
  },
  getUsers: () => {
    return db('users');
  }
}
