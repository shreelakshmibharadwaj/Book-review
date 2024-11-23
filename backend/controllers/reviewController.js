const asyncHandler = require('express-async-handler');
const Review = require('../models/Review');
const Book = require('../models/Book');

// @desc Add a new review
// @route POST /api/reviews
const addReview = asyncHandler(async (req, res) => {
  const { bookId, comment, rating } = req.body;

  const review = new Review({
    user: req.user._id,
    book: bookId,
    comment,
    rating,
  });

  const createdReview = await review.save();

  const book = await Book.findById(bookId);
  book.reviews.push(createdReview._id);
  await book.save();

  res.status(201).json(createdReview);
});

module.exports = { addReview };
