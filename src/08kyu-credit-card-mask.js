const capMe = require("./8kyu-name-array-capping");

// return masked string
function maskify(cc) {
  if (cc.length > 4) {
    return `${'#'.repeat(cc.length - 4)}${cc.slice(-4)}`;
  }
  return cc;
}

module.exports = maskify;