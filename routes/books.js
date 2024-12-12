const express = require("express");
const router = express.Router();
const BookController = require("../controllers/BookController.js");

router.get("/", BookController.index);

router.get("/:id", BookController.show);

module.exports = router;
