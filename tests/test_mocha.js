const assert = require('chai').assert;
const sum = require('../script.js');

describe('sum', function () {
  it('should return the sum of two numbers', function () {
    const result = sum(3, 5);
    assert.equal(result, 8);
  });

});
