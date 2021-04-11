let sortGiftCode = require('../src/7kyu-sort-the-gift-code.js');
let expect = require('chai').expect;

describe('sortGiftCode', function () {
  it('sorts gift codes alphabetically', function () {
    expect(sortGiftCode('abcdef')).to.equal('abcdef');
    expect(sortGiftCode('pqksuvy')).to.equal('kpqsuvy');
    expect(sortGiftCode('zyxwvutsrqponmlkjihgfedcba')).to.equal('abcdefghijklmnopqrstuvwxyz');
  })
})