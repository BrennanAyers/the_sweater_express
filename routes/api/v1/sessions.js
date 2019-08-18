var express = require('express');
var router = express.Router();
var User = require('../../../models').User
const bcrypt = require('bcryptjs')

router.post('/', function(req, res, next) {
  user = User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(user => {
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      res.setHeader('Content-Type', 'application/json')
      res.status(200).send(JSON.stringify({api_key: user.api_key}))
    } else {
      res.setHeader('Content-Type', 'application/json')
      res.status(401).send(JSON.stringify({message: 'Sorry, that email or password does not match.'}))
    }
  })
  .catch(error => {
    res.setHeader('Content-Type', 'application/json')
    res.status(500).send({error})
  })
});

module.exports = router;
