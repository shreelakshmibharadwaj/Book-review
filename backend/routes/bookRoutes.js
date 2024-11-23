const express = require('express');
const { getBooks, getBookById, addBook } = require('../controllers/bookController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(getBooks).post(protect, admin, addBook);
router.route('/:id').get(getBookById);

module.exports = router;
