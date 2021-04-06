let isSquare = require('../src/7kyu-youre-a-square.js');
let expect = require('chai').expect;

describe('isSquare', function () {
  it('returns if it\'s a square number', function () {
    expect(isSquare(-1)).to.equal(false);
    expect(isSquare(0)).to.equal(true);
    expect(isSquare(3)).to.equal(false);
    expect(isSquare(4)).to.equal(true);
    expect(isSquare(25)).to.equal(true);
    expect(isSquare(26)).to.equal(false);
  });
});