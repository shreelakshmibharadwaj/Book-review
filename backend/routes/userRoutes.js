const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/:id').get(protect, getUserProfile).put(protect, updateUserProfile);

module.exports = router;
