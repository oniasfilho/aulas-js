const title = "Class 6 - Functional Patterns and Mini Project"

function add(a, b) {
  return a + b
}

function double(number) {
  return number * 2
}

function square(number) {
  return number * number
}

function addUser(users, newUser) {
  return [...users, newUser]
}

function filterAdults(users) {
  return users.filter((user) => user.age >= 18)
}

function calculateAverageAge(users) {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0)
  return totalAge / users.length
}

function run() {
  const users = [
    { name: "Ana", age: 17 },
    { name: "Bruno", age: 21 },
    { name: "Carla", age: 32 }
  ]

  console.log("Pure function add:", add(2, 3))

  const composedValue = square(double(4))
  console.log("Function composition:", composedValue)

  const nextUsers = addUser(users, { name: "Diego", age: 19 })
  console.log("Users after add:", nextUsers)

  const adults = filterAdults(nextUsers)
  console.log("Adult users:", adults)

  console.log("Average age:", calculateAverageAge(nextUsers))
}

module.exports = {
  title,
  run
}
