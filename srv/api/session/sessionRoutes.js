const express = require('express');
const router = express.Router();

const createTokenHandler = require('./createJwt');
const authGuard = require('./authGuard');

router.post('/createToken', [createTokenHandler], (req,res) => {
  if(req.userCreated) {
    res.status(201).send({op:'created', token: req.authToken});
  } else if(req.userAuthenticated) {
    res.status(200).send({op:'authenticated', token: req.authToken});
  }
});

router.get('/me', [authGuard, (req,res) => {
  res.status(200).send(req.session._user);
}]);

module.exports = exports = router;
