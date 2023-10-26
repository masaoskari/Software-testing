const sum = require('../script.js');
const { toBeGreaterThan, toEqual} = require('jest-extended');
const { matchers } = require('jest-chain');
expect.extend({ ...matchers });

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2))
      .toBe(3)
      .not.toBeGreaterThan(3)
      .not.toBeLessThan(3)
      .not.toEqual(0)
  });
});
