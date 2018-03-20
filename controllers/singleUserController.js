const db = require("../models/db.js");

module.exports = function(req, res) {
  res.render("singleuser", {
    user: db[req.params.id]
  });
};
