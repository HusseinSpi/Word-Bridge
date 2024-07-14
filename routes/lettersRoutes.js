const express = require("express");
const lettersController = require("../controllers/lettersController");

const router = express.Router();

router
  .route("/")
  .get(lettersController.getAllLetters)
  .post(lettersController.addLetters);

module.exports = router;
