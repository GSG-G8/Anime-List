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

test('Testing endpoint /anime-giphy', (done) => {
  request(app)
    .get('/anime-giphy')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});

test('Should match "attack on titans"', (done) => {
  request(app)
    .post('/anime')
    .set({
      'Content-Type': 'application/json',
    })
    .send(JSON.stringify({ anime: 'Attack on Titan' }))
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.data[0].attributes.titles.en).toBe('Attack on Titan');
      done();
    });
});
