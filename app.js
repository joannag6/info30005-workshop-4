const db = require("./models/db");

const express = require("express");
const app = express();

/* Route responses to client requests */
app.get('/', function(req,res) {
  res.send("Hello World");
});
app.get('/bye', function(req,res) {
  res.send("Goodbye world");
});
app.get('/users', function(req,res) {
  res.send(db);
});
app.get('/users/:id', function(req,res) {
  res.send(db[req.params.id]);
});


/* Starts the server */
app.listen(3000, function() {
  console.log('Express serving at port 3000');
});
