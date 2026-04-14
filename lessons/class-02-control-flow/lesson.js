const title = "Class 2 - Control Flow and Data Structures"

function run() {
  const age = 16
  const role = "admin"
  const fruits = ["apple", "banana", "orange"]
  const user = {
    name: "John",
    age: 30
  }

  if (age >= 18) {
    console.log("Adult")
  } else {
    console.log("Minor")
  }

  switch (role) {
    case "admin":
      console.log("Admin user")
      break
    case "teacher":
      console.log("Teacher user")
      break
    default:
      console.log("Regular user")
  }

  fruits.push("grape")
  console.log("First fruit:", fruits[0])
  console.log("All fruits:", fruits)
  console.log("Fruit count:", fruits.length)

  console.log("User name:", user.name)
  console.log("User age:", user.age)

  let total = 0
  for (let index = 0; index < fruits.length; index += 1) {
    console.log(`Fruit at index ${index}:`, fruits[index])
    total += index
  }

  let counter = 1
  while (counter <= 3) {
    console.log("While loop counter:", counter)
    counter += 1
  }

  console.log("Sum of fruit indexes:", total)
}

module.exports = {
  title,
  run
}
