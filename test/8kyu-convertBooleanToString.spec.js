let boolToWord = require('../src/8kyu-convertBoolToWord.js');
const assert = require('chai').assert;

describe('convertBoolToWord', function() {
  it('converts boolean true to string yes', function() {
    assert(boolToWord(true), 'Yes');
  })
})