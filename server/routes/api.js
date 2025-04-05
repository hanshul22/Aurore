const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /api/status - basic health check endpoint
router.get('/status', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// User routes
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', express.json(), userController.createUser);

module.exports = router; 