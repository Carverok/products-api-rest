const request = require('supertest');
const { expect } = require('chai');

const app = require('./server.js');

describe('GET /', () => {
  it('should return a successful response', async () => {
    const res = await request(app).get('/');

    expect(res.status).to.equal(200);
    expect(res.body).to.haveOwnProperty('message');
    expect(res.body.message).to.equal('api rest');
  });
});
