const { getClientIp } = require('@supercharge/request-ip');

module.exports = {
    getIp: function (req, res, next) {
        req.ip = getClientIp(req);

        //next();

        console.log(req.ip);

        return res.json(req.ip);
    },
};
