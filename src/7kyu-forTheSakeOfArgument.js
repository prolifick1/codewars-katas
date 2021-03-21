function number() {
  return Array.from(arguments).every(function(num) {
    return(typeof(num) === 'number');
  })
}

module.exports = number;