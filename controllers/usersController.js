const db = require("../models/db.js");

module.exports = function(req, res) {
  res.render("users", {
    users: db
  });
};
