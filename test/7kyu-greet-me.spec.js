const { expect } = require('chai');
let greet = require('../src/7kyu-greet-me');

describe('greetMe', function() {
  it('greets with the correct punctuation', function() {
    expect(greet('JACK')).to.equal('Hello Jack!');
    expect(greet('riley')).to.equal('Hello Riley!');
  })
})