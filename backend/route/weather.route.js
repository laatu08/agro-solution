const express = require('express');
const authenticate = require('../middleware/authMiddleware');
const { getWeatherByAddress } = require('../controller/weather.controller');

const router = express.Router();

// GET /api/weather
router.get('/', authenticate, getWeatherByAddress);

module.exports = router;
