const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

// Define routes for the '/api/users' endpoint
router.get('/', userController.getAllUsers); // GET all users
router.get('/:id', userController.getSingleUser); // GET a user by ID
router.post('/', userController.createUser); // POST a new user
router.put('/:id', userController.updateUser); // PUT (update) a user by ID
router.delete('/:id', userController.deleteUser); // DELETE a user by ID

module.exports = router;
