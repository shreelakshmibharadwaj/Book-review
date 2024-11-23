const asyncHandler = require('express-async-handler');
const Book = require('../models/Book');

// @desc Get all books
// @route GET /api/books
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find().populate('reviews');
  res.json(books);
});

// @desc Get a specific book
// @route GET /api/books/:id
const getBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id).populate('reviews');
  if (book) {
    res.json(book);
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

// @desc Add a new book (Admin Only)
// @route POST /api/books
const addBook = asyncHandler(async (req, res) => {
  const { title, author, description, genres } = req.body;

  const book = new Book({
    title,
    author,
    description,
    genres,
  });

  const createdBook = await book.save();
  res.status(201).json(createdBook);
});

module.exports = { getBooks, getBookById, addBook };
