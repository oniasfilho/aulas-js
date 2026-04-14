const title = "Class 1 - JavaScript Fundamentals"

function run() {
  const studentName = "John"
  let age = 25
  const isLearningJavaScript = true
  const emptyValue = null
  let notAssigned

  console.log("Name:", studentName)
  console.log("Age:", age)
  console.log("Learning JavaScript:", isLearningJavaScript)
  console.log("Null example:", emptyValue)
  console.log("Undefined example:", notAssigned)

  const sum = 10 + 5
  const isAdult = age >= 18
  const canEnterClass = isAdult && isLearningJavaScript

  console.log("10 + 5 =", sum)
  console.log("Is adult?", isAdult)
  console.log("Can enter class?", canEnterClass)

  age = age + 1
  console.log("Age next year:", age)
}

module.exports = {
  title,
  run
}
