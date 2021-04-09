// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of white " or "
// yellow " or "
// purple " or "
// red " when instantiated

let colors = ['white', 'yellow', 'purple', 'red'];

function Ghost() {
  this.color = colors[Math.floor(Math.random()*4)];
}

module.exports = Ghost;