let getVillainName = require('../src/7kyu-find-your-villain-name.js');
let expect = require('chai').expect;

describe('getVillainName', function () {
  it('returns the right villain name', function () {
    //may 3
    expect(getVillainName(new Date("May 3"))).to.equal("The Despicable Raisin")

    //apr 1
    expect(getVillainName(new Date("April 21"))).to.equal("The Trashy Pickle")

    //dec 7
    expect(getVillainName(new Date("December 17"))).to.equal("The Awkward House Cat")

    //apr 1
    expect(getVillainName(new Date("April 21"))).to.equal("The Trashy Pickle");

    //dec 7
    expect(getVillainName(new Date("December 17"))).to.equal("The Awkward House Cat");

    //jan 0
    expect(getVillainName(new Date("January 10"))).to.equal("The Evil Mustache");

    //mar 2
    expect(getVillainName(new Date("March 22"))).to.equal("The Cruel Hood Ornament");

    //oct 5
    expect(getVillainName(new Date("October 5"))).to.equal("The Orange Potato");

    //feb 6
    expect(getVillainName(new Date("February 6"))).to.equal("The Vile Tomato");

    //jun 0
    expect(getVillainName(new Date("June 10"))).to.equal("The Embarrassing Mustache");

    //aug 4
    expect(getVillainName(new Date("August 4"))).to.equal("The Atrocious Recycling Bin");

    //nov 8
    expect(getVillainName(new Date("November 18"))).to.equal("The Terrifying Teaspoon");

    //jul 3
    expect(getVillainName(new Date("July 3"))).to.equal("The Disreputable Raisin");
  })
})