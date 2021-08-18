const fetch = require('node-fetch');

module.exports = {
    location: async function (req, res) {
        let ip = fetch(`https://ipinfo.io/json`)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

        return res.json(ip);
    },
};
