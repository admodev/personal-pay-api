const request = require('supertest');
const express = require('express');

const app = express();

app.get('/v1/api/current/:city?', function (req, res) {
    res.status(200).json({ city: 'Caseros' });
});

request(app)
    .get('/v1/api/current/:city?')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '15')
    .expect(200)
    .end(function (err, res) {
        if (err) throw err;
    });
