const title = "Class 3 - Functions and ES6 Basics"

function sum(a, b) {
  return a + b
}

const greet = (name) => `Hello ${name}`

function run() {
  const total = sum(5, 7)
  console.log("Sum:", total)

  console.log(greet("John"))

  const user = {
    name: "Maria",
    age: 28,
    role: "teacher"
  }

  const { name, age } = user
  console.log(`User: ${name}, age: ${age}`)

  const numbers = [10, 20, 30]
  const [first, second] = numbers
  console.log("First number:", first)
  console.log("Second number:", second)

  const extraNumbers = [40, 50]
  const mergedNumbers = [...numbers, ...extraNumbers]
  console.log("Merged numbers:", mergedNumbers)

  const copiedUser = {
    ...user,
    active: true
  }
  console.log("Copied user:", copiedUser)
}

module.exports = {
  title,
  run
}
