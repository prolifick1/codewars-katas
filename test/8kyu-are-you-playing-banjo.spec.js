const areYouPlayingBanjo = require('../src/8kyu-are-you-playing-banjo.js');
const expect = require('chai').expect;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    expect(areYouPlayingBanjo('Adam')).to.equal('Adam does not play banjo');
    expect(areYouPlayingBanjo('Paul')).to.equal('Paul does not play banjo');
    expect(areYouPlayingBanjo('Ringo')).to.equal('Ringo plays banjo');
    expect(areYouPlayingBanjo('bravo')).to.equal('bravo does not play banjo');
    expect(areYouPlayingBanjo('rolf')).to.equal('rolf plays banjo');
  })
})