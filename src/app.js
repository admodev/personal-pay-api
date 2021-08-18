const express = require('express');
const cors = require('cors');
const ipRoutes = require('./routes/ip.routes');
const actualWeatherRoutes = require('./routes/actualWeather.routes');
const locationRoutes = require('./routes/location.routes');
const forecastRoutes = require('./routes/forecast.routes');

const app = express();

app.set('port', process.env.PORT || 4500);

const dotenv = require('dotenv');

dotenv.config();

// Middlewares
const corsOptions = {
    origin: 'http://localhost:4500',
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.enable('trust proxy');

app.get('/v1', (req, res) => {
    res.json({
        message: 'Welcome to Personal Pay weather API!',
    });
});

// Routes
// Returns current ip address from request
app.use('/v1/api/ip', ipRoutes);
// Returns current weather for specified location via ip address data
app.use('/v1/api/current/:city?', actualWeatherRoutes);
// Returns location data based on ipinfo output
app.use('/v1/api/location', locationRoutes);
// Returns forecast for 5 days with 3 hours step by city
app.use('/v1/api/forecast/:city?', forecastRoutes);

module.exports = app;
