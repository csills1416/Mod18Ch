const express = require('express');
const router = express.Router();

// Import route files
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
const reactionRoutes = require('./reactionRoutes');

// Define routes using the imported route files
router.use('/users', userRoutes); // All user-related routes start with '/users'
router.use('/thoughts', thoughtRoutes); // All thought-related routes start with '/thoughts'
router.use('/reactions', reactionRoutes); // All reaction-related routes start with '/reactions'

module.exports = router;
