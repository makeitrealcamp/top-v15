const req = require('supertest');
const { app } = require('../app');
const { connect, disconnect, cleanup } = require('../db');
const { createUser, generateToken, createTask } = require('../utils/testHelpers');

describe('tasks', () => {
  let token;
  let user;
  let task;

  beforeAll(async () => {
    await connect();
  });

  beforeEach(async () => {
    await cleanup();
    const userData = { email: 'test@test.com', password: 'Password123' };

    //const { body: { token } } = await req(app).post('/users/signin').send(userData);
    user = await createUser(userData);
    task = await createTask({ user: user._id })
    token = generateToken(user);
  })

  afterAll(async () => {
    await disconnect();
  })

  it('should create task if I am authenticated', async () => {
    const task = { name: 'task 1' }

    const res = await req(app)
      .post('/tasks/')
      .send(task)
      .set('Authorization', `Bearer ${token}`)
      // .set('Content-Type', 'application/json')

    expect(res.statusCode).toBe(201)
  });

  it('should create task with default done set to false', async () => {
    const task = { name: 'task 1' }

    const res = await req(app)
      .post('/tasks/')
      .send(task)
      .set('Authorization', `Bearer ${token}`)
      // .set('Content-Type', 'application/json')

    expect(res.statusCode).toBe(201)
    expect(res.body.done).toBe(false);
  })

  it('should not create task if user is not authenticated', async () => {
    const task = { name: 'task 1' }

    const res = await req(app)
      .post('/tasks/')
      .send(task)
      // .set('Content-Type', 'application/json')

    expect(res.statusCode).toBe(401)
    expect(res.body.message).toMatch(/your session has expired/i)
  })

  it('should not allow update if user is not owner', async () => {
    const user2 = await createUser({ email: 'test2@test.com', password: 'Password123' });
    const token2 = generateToken(user2);

    const res = await req(app)
      .put(`/tasks/${task._id}`)
      .send({ name: 'new name' })
      .set('Authorization', `Bearer ${token2}`);

    expect(res.statusCode).toBe(400);
  })

  it('should allow update if user is owner', async () => {
    const res = await req(app)
      .put(`/tasks/${task._id}`)
      .send({ name: 'new name' })
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  })

  it('should allow delete if user is owner', async () => {
    const res = await req(app)
      .delete(`/tasks/${task._id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  })
})
