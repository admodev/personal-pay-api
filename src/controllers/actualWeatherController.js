const fetch = require('node-fetch');

module.exports = {
    getActualWeather: async function (req, res) {
        let actualWeather;
        let key = process.env.OPEN_WEATHER_API_KEY;
        let city = req.query.city;
        actualWeather = fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`
        )
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        return res.json(actualWeather);
    },
};
