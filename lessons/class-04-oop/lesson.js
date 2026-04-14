const { Person, User, Admin } = require("./classes")

const title = "Class 4 - Object-Oriented JavaScript and Prototypes"

function run() {
  const person = new Person("Ana", 22)
  console.log(person.greet())
  console.log("Age after birthday:", person.haveBirthday())

  const user = new User("John", 30)
  console.log(user.greet())
  console.log(user.describe())

  const admin = new Admin("Maria", 35, ["delete", "update"])
  console.log(admin.greet())
  console.log("Permissions:", admin.permissions)
  console.log(admin.deleteUser("John"))

  console.log("Is admin a User?", admin instanceof User)
  console.log("Is user a Person?", user instanceof Person)
}

module.exports = {
  title,
  run
}
