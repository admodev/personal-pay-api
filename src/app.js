const express = require('express');
const cors = require('cors');
const ipRoutes = require('./routes/ip.routes');
const actualWeatherRoutes = require('./routes/actualWeather.routes');
const locationRoutes = require('./routes/location.routes');

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
app.use('/v1/api/ip', ipRoutes);
app.use('/v1/api/actualWeather', actualWeatherRoutes);
app.use('/v1/api/location', locationRoutes);

module.exports = app;
