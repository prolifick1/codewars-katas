const greet = require('../src/8kyu-jennys-secret-message');
const expect = require('chai').expect;

describe("Jenny's greeting function", function () {
  it("should greet some people normally", function () {
    expect(greet("Jim")).to.equal("Hello, Jim!");
    expect(greet("Jane")).to.equal("Hello, Jane!");
    expect(greet("Simon")).to.equal("Hello, Simon!");
  });
  it("should greet Johnny a little bit more special", function () {
    expect(greet("Johnny")).to.equal("Hello, my love!");
  });
});