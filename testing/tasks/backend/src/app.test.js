const req = require('supertest');
const { app } = require('./app');

describe('app', () => {
  it('should receive greetings message', async () => {
    const res = await req(app).get('/');

    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/hello world/i)
  });
})
