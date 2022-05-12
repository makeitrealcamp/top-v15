const { multiply } = require('./multiply');

describe('Multiply', () => {
  it('should multiply two numbers correctly', () => {
    expect(multiply(1,2)).toBe(2);
  });
});
