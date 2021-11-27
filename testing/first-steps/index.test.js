const { sum, multiply, createUser } = require('./index')

// 1st code and then tests
describe('sum', () => {
  it('should add two numbers correctly', () => {
    const result = sum(1,2)

    // assertion
    expect(result).toBe(3)
    expect(sum(123, 5)).toBe(128)
    expect({}).toMatchObject({})
  })

  it('should not fail', () => {
    expect(sum(-1, -2)).toBe(-3)
  })
})

// Test Driven Development TDD - 1st test and then code
describe('multiply', () => {
  it('should multiply two numbers correctly', () => {
    expect(multiply(1,2)).toBe(2)
  })
})

describe('Users', () => {
  it('should be able to create user after passing mail and password', () => {
    const user = {
      mail: 'user@test.com',
      password: 'test123457',
    }

    expect(createUser(user.mail, user.password)).toMatchObject({ mail: 'user@test.com', verified: false })
  })
})

// Behavioral Driven Development BDD - 1st bahavior and then code

// Description (50)
// User should be able to login
// Behavior given then
// given that the user writes his/her username and password correctly then he/she should be able to login
