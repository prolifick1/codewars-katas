const maskify = require('../src/08kyu-credit-card-mask.js');
const expect = require('chai').expect;


describe("maskify", function () {
  it("should work for some examples", function () {
    expect(maskify('4556364607935616')).to.equal('############5616');
    expect(maskify('1')).to.equal('1');
    expect(maskify('11111')).to.equal('#1111');
  });
});