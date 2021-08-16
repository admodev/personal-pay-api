const express = require('express');
const router = express.Router();

const actualWeatherController = require('../controllers/actualWeatherController');

router.get('/', actualWeatherController.getActualWeather);

// router.get("/:city", actualWeatherController.getActualWeatherByCity());

module.exports = router;
