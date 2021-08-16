const fetch = require('node-fetch');

module.exports = {
    getActualWeather: async function (req, res) {
        let actualWeather;
        let key = process.env.OPEN_WEATHER_API_KEY;
        let city = req.body.city;
        let fetchWeatherURL = `api.openweathermap.org/data/2.5/weather?q=Buenos Aires, Argentina&appid=c398d79721b25b63eea2116476a630ff`;
        actualWeather = fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`
        )
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        return res.json(actualWeather);
    },
};
