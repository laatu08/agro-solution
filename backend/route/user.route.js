const express = require('express');
const authenticate = require('../middleware/authMiddleware');
const { getUserData } = require('../controller/user.controller');

const router = express.Router();

router.get('/profile', authenticate, getUserData);

module.exports = router;