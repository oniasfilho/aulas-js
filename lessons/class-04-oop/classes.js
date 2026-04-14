function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.greet = function greet() {
  return `Hello, my name is ${this.name}`
}

Person.prototype.haveBirthday = function haveBirthday() {
  this.age += 1
  return this.age
}

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    return `Hi, I am ${this.name}`
  }

  describe() {
    return `${this.name} is ${this.age} years old`
  }
}

class Admin extends User {
  constructor(name, age, permissions) {
    super(name, age)
    this.permissions = permissions
  }

  deleteUser(userName) {
    return `${this.name} deleted ${userName}`
  }
}

module.exports = {
  Person,
  User,
  Admin
}
