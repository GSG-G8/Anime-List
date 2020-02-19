const request = require('supertest');

const app = require('../app');


test('Expecting status code 200 when /', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});

test('Testing endpoint facster', (done) => {
  request(app)
    .get('/anime-giphy')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});
