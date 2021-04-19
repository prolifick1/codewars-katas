let solution = require('../src/7kyu-limit-string-length.js');
let expect = require('chai').expect;

describe('solution', function() {
  it('truncates strings that dont contain whitespace', function() {
    expect(solution('Testing String', 3)).to.equal('Tes...');
    expect(solution('Testing String', 8)).to.equal('Testing ...');
    expect(solution('Test', 8)).to.equal('Test');
  })
})

