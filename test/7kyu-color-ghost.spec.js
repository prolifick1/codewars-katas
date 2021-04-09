let Ghost = require('../src/7kyu-color-ghost');
let expect = require('chai').expect;

describe("Ghost", function () {

  ghostColors = []
  for (var i = 1; i <= 100; i++) {
    ghostColors.push(new Ghost().color);
  }

  var ghostColor = function (ghostColors, color) {
    var answer;
    for (var i = 0; i < ghostColors.length; i++) {
      if (ghostColors[i] == color) {
        answer = true;
        break;
      }
    }
    return answer;
  };


  it("should sometimes make white ghosts", function () {
    expect(ghostColor(ghostColors, "white")).to.equal(true);
  });

  it("should sometimes make yellow ghosts", function () {
    expect(ghostColor(ghostColors, "yellow")).to.equal(true);
  });

  it("should sometimes make purple ghosts", function () {
    expect(ghostColor(ghostColors, "purple")).to.equal(true);
  });

  it("should sometimes make red ghosts", function () {
    expect(ghostColor(ghostColors, "red")).to.equal(true);
  });
});