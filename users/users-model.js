const db = require('../database/dbConfig');

module.exports = {
  register: (newUser) => {
    return db('users').insert(newUser);
  },
  findUser: (user) => {
    return db('users').where(user);
  },
  getUsers: (user) => {
    const dept = db('users').select('department').where('username', user).first();
    return db('users').where('department', dept);
  }
}
