let Sleigh = require('../src/8kyu-sleigh-authentication.js');
const expect = require('chai').expect;

describe("Santa's Sleigh", function () {
  var sleigh = new Sleigh();

  it('must authenticate with correct credentials', function () {
    expect(sleigh.authenticate('Santa Claus', 'Ho Ho Ho!')).to.equal(true);
  });

  it('must not authenticate with incorrect credentials', function () {
    expect(sleigh.authenticate('Santa', 'Ho Ho Ho!')).to.equal(false);
    expect(sleigh.authenticate('Santa Claus', 'Ho Ho!')).to.equal(false);
    expect(sleigh.authenticate('jhoffner', 'CodeWars')).to.equal(false);
  });
});