let Ball = require('../src/08kyu-regular-ball-super-ball');
let expect = require('chai').expect;

describe('Ball', function () {
  it('assigns object property', function () {
      expect(new Ball().ballType).to.equal("regular"); expect(new Ball("super").ballType).to.equal("super");
  })
});