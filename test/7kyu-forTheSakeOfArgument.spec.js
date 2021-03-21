let numbers = require('../src/7kyu-forTheSakeOfArgument.js');
const chai = require('chai');
const assert = chai.assert;


describe('numbers', function() {
  it('returns true if all params are type Number, otherwise false', function() {
    assert(numbers(1, 4, 3, 2, 5), true);
  })
})