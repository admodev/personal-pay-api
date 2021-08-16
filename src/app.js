const express = require('express');
const cors = require('cors');
const actualWeatherRoutes = require('./routes/actualWeather.routes');

const app = express();

app.set('port', process.env.PORT || 4500);

const dotenv = require('dotenv');

dotenv.config();

// Middlewares
const corsOptions = {
    // origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Personal Pay weather API!',
    });
});

// Routes
app.use('/api/actualWeather', actualWeatherRoutes);

module.exports = app;
