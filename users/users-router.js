const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  Users.getUsers(req.decodedJwt.username)
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});



module.exports = router;
