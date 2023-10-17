const assert = require('chai').assert;
const sum = require('../script.js');

describe('sum', function () {
  it('should return the sum of two numbers', function () {
    const result = sum(3, 5);
    assert.equal(result, 8);
  });

  it('should handle negative numbers', function () {
    const result = sum(-3, 5);
    assert.equal(result, 2);
  });

  it('should handle zero values', function () {
    const result = sum(0, 0);
    assert.equal(result, 0);
  });

  // Add more test cases as needed to thoroughly test the function
});
