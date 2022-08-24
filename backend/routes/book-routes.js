const express = require("express");
const router = express.Router();
const Book = require("../model/Books");

const booksController = require("../contollers/books-controller");
//search book
router.get("/", booksController.getAllBooks);
//add book
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);
module.exports = router;
