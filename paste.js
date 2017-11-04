'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const mongodbURL = process.env.PASTE_MONGO_URL || 'mongodb://localhost:27017/pastejs';
mongoose.connect(mongodbURL,{useMongoClient:true});

app.use(bodyParser.json());

if(process.env.PASTE_ENV === 'dev') {
  app.use((req,res,next) => {
    if(req.body) console.log('body',req.body);
    if(req.params) console.log('params',req.params);
    if(req.query) console.log('query',req.query);
    next();
  });
}


const apiRouter = require('./srv/router');
app.use(apiRouter);

const listenPort = process.env.PASTE_PORT || 3000;

app.listen(listenPort,()=>{
  console.log(`listening on ${listenPort}`)
});
