const request = require('supertest');
const express = require('express');

const app = express();

describe('/v1/api/location', () => {
    it('Should get the user location.', async () => {
        const response = await request(app)
            .get('/v1/api/location')
            .expect('Content-Type', /json/)
            .expect('Content-Length', '15')
            .expect(200);
    });
});
