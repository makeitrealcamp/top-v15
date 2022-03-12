const req = require('supertest');
const { app } = require('../app');
const { connect, disconnect, cleanup } = require('../db');
const { createUser } = require('../utils/testHelpers');

describe('user', () => {
  beforeAll(async () => {
    await connect();
  });

  beforeEach(async () => {
    await cleanup();
  });

  afterAll(async () => {
    await disconnect();
  });

  it.each([
    { email: 'test@test.com', password: 'Password123' },
    { email: 'test1@test.com', password: 'Password123' },
    { email: 'test2@test.com', password: 'Password123' },
    { email: 'test3@test.com', password: 'Password123' },
  ])('should register user correctly', async ({ email, password }) => {
    const res = await req(app)
      .post('/users/signup')
      .send({ email, password });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should run user validations', async () => {
    const res = await req(app)
      .post('/users/signup')
      .send({ email: 'invalid', password: 'Password123' });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch(/email is not valid/i);
  });

  it('should login user correctly', async () => {
    const user = { email: 'test@test.com', password: 'Password123' };

    // await req(app).post('/users/signup').send(user);
    await createUser(user);

    const res = await req(app)
      .post('/users/signin')
      .send(user);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('token');
  });
})
