const Dog = require('../src/8kyu-makeThemBark.js');
const assert = require('chai').assert;

describe('constructor Dog', function() {
  it('has method bark', function() {
    var apollo = new Dog('Apollo', 'Dobermann', 'male', '4');
    var zeus = new Dog('Zeus', 'Dobermann', 'male', '4');
    assert(apollo.bark, 'Woof!');
    assert(zeus.bark, 'Woof!');
  })
})