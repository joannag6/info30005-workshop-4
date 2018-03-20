const express = require("../node_modules/express");
const router = express.Router();

const indexController = require("../controllers/indexController.js")
const usersController = require("../controllers/usersController.js")
const singleUserController = require("../controllers/singleUserController.js")

/* Route responses to client requests */
router.get('/', indexController);
router.get('/users', usersController);
router.get('/users/:id', singleUserController);

router.get('/bye', function(req,res) {
  res.send("Goodbye world");
});

module.exports = router;
