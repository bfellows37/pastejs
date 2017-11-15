const express = require('express');
const router = express.Router();

const login = require('./login');

router.post('/login',
  login,
  (req,res) => {
    if(req.userCreated) {
      res.status(201).send({op:'created'});
    } else if(req.userAuthenticated) {
      res.status(200).send({op:'authenticated'});
    }
  });

router.use((error,req,res,next) => {
  res.status(error.httpStatusCode || 400).send(error.message);
});

module.exports = exports = router;
