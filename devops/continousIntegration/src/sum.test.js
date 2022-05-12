const { sum } = require('./sum');

describe('Sum', () => {
  it('should add two numbers correctly', () => {
    expect(sum(1,2)).toBe(3);
  });
})
