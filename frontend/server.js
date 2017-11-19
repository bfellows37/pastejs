
require('dotenv-safe').load();

const express = require('express');
const app = express();
const proxy = require('express-http-proxy');


app.use(express.static('dist'));
app.use('/api',proxy(process.env.PASTE_API_PROXY_URL));
app.use('*',express.static('dist/index.html'));

app.listen('4200', () => {
  console.log('listening on 4200');
});
