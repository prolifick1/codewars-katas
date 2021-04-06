let checkCoupon = require('../src/7kyu-coupon-code.js');
let expect = require('chai').expect;

describe('checkCoupon', function () {
  it('returns true when valid', function () {
    expect(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')).to.equal(true);
  });
  it('returns false when invalid', function() {
    expect(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')).to.equal(false);
  });
})