const express = require('express');
const app = express();
const router = require('./routes/router');

app.set('view engine', 'ejs');

app.use(router);

/* Starts the server */
app.listen(3000, function() {
  console.log('Express serving at port 3000');
});
