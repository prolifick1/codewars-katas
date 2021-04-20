let sillycase = require('../src/07kyu-sillycase.js');
let expect = require('chai').expect;

describe('sillycase', function () {
  it('performs sillycase', function () {
    expect(sillycase('foobar')).to.equal("fooBAR");
    expect(sillycase('codewars')).to.equal('codeWARS');
    expect(sillycase('brian')).to.equal('briAN');

  });
})
// describe("Tests sillycase", function () {
//   it("should be idempotent", function () {
//     var i, t, r;
//     for (i = 0; i < 100; ++i) {
//       t = randomToken().replace(/\d/g, '');
//       r = sillycase(t);
//       expect(sillycase(r), r);
//     }
//   });
// })