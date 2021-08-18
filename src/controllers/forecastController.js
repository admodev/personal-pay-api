const fetch = require('node-fetch');

module.exports = {
    getForecast: async function (req, res) {
        let forecast;
        let key = process.env.OPEN_WEATHER_API_KEY;
        let city = req.query.city;
        forecast = fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`
        )
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

        return res.json(forecast);
    },
};
