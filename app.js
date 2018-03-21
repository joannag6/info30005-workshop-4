const express = require('express');
const app = express();
const router = require('./routes/router');

app.set('view engine', 'ejs');

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log('Express serving at port '+PORT.toString());
});
