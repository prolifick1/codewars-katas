function Dog(name, breed, sex, age) {
  this.name = name;
  this.breed = breed;
  this.sex = sex;
  this.age = age;
}

//TODO: solve the barking problem

Dog.prototype.bark = function() {
  return('Woof!');
}

module.exports = Dog;