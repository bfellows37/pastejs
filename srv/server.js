'use strict';

require('dotenv-safe').load();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const PASTE_MONGO_URL = process.env.PASTE_MONGO_URL;
const LISTEN_PORT = process.env.PASTE_PORT;

mongoose.connect(PASTE_MONGO_URL,{useMongoClient:true});

app.use(cors());

app.use(bodyParser.json());
const apiRouter = require('./router');

app.use(apiRouter);
app.use((error,req,res,next)=>{
  console.log(error);
  res.status(500).send(error);

});
app.listen(LISTEN_PORT,()=>{
  console.log(`listening on ${LISTEN_PORT}`)
});
