const db = require('../database/dbConfig');

module.exports = {
  register: (newUser) => {
    const id = db('users').insert(newUser).then(id => id[0]);
    return db('users').where('id', id);
  },
  findUser: (user) => {
    return db('users').where(user);
  },
  getUsers: (user) => {
    const dept = db('users').select('department').where('username', user).first();
    return db('users').where('department', dept);
  }
}
