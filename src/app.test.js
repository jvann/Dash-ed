const request = require('supertest');
const { app } = require('./app');

describe('App', () => {
    test('it should send hello world 2', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response).toBe('Hello Dash-ed REST API!');
    });

    test('it should send hello world', done => {
        request(app)
            .get('/')
            .expect(200)
            .expect(res => {
                expect(res.body.text).toBe('Hello Dash-ed REST API!');
            })
            .end(done);
    });
});