const sum = require('../script.js');

describe('sum function', () => {
  test('should return the sum of two positive numbers', () => {
    expect(sum(3, 5)).toBe(8);
  });

  test('should return the sum of a positive and a negative number', () => {
    expect(sum(3, -5)).toBe(-2);
  });

  test('should return the sum of a negative and a positive number', () => {
    expect(sum(-3, 5)).toBe(2);
  });

  test('should return zero when adding zero to a number', () => {
    expect(sum(3, 0)).toBe(3);
  });

  test('should return the number itself when adding zero to it', () => {
    expect(sum(0, 5)).toBe(5);
  });
});
