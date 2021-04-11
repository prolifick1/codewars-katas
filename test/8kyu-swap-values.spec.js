let swapValues = require('../src/8kyu-swap-values');
let expect = require('chai').expect;

describe('swapValues', function () {
  it('swaps values of an array', function () {
    var arr = [1, 2]
    swapValues(arr);
    expect(arr[0]).to.equal(2);
    expect(arr[1]).to.equal(1);
  })

})