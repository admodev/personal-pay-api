module.exports = {
  getActualWeather: async function (req, res) {
    const actualWeather = "Sunny";
    return res.json(actualWeather);
  },
};
