const Book = require("../model/Books");

//get all details of books
const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "no product found" });
  }
  return res.status(200).json({ books });
};

//get the book details by id
const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "NO book find by the id" });
  }
  return res.status(200).json({ book });
};

//add a new book the database

const addBook = async (req, res, next) => {
  //desturucturing the array that is value is assgned to each variable from the request

  const { name, author, description, price, available } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: "unable to add the book details" });
  }
  return res.status(201).json({ book });
};

//update the book details
const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res
      .status(404)
      .json({ message: "unable to update the book details" });
  }
  return res.status(200).json({ book });
};

//delete the details of book

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res
      .status(404)
      .json({ message: "the book not found by the id to delete" });
  }
  return res.status(200).json({ message: "product successfully deleted" });
};
exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
