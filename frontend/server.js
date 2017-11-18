const express = require('express');
const app = express();

app.use(express.static('dist'));
app.use('*',express.static('dist/index.html'));

app.listen('8001', () => {
  console.log('listening on 8001');
});
