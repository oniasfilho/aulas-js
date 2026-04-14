const { numbers, users, orders } = require("./data")

const title = "Class 5 - Functional Programming"

function run() {
  const doubledNumbers = numbers.map((number) => number * 2)
  console.log("Map result:", doubledNumbers)

  const adults = users.filter((user) => user.age >= 18)
  console.log("Filter result:", adults)

  const totalSum = numbers.reduce((accumulator, number) => accumulator + number, 0)
  console.log("Reduce result:", totalSum)

  console.log("forEach result:")
  users.forEach((user, index) => {
    console.log(`${index + 1}. ${user.name} from ${user.city}`)
  })

  const userCards = users.map((user) => ({
    id: user.id,
    displayName: user.name.toUpperCase(),
    category: user.age >= 18 ? "adult" : "minor"
  }))
  console.log("Transformed users:", userCards)

  const paidOrderSummary = orders
    .filter((order) => order.status === "paid")
    .map((order) => ({
      orderId: order.id,
      customer: order.customer,
      formattedTotal: `USD ${order.total.toFixed(2)}`
    }))
  console.log("Paid orders:", paidOrderSummary)

  const originalUsers = users
  const updatedUsers = [...users, { id: 5, name: "Elisa", age: 29, city: "Brasilia" }]
  console.log("Original users length:", originalUsers.length)
  console.log("Updated users length:", updatedUsers.length)
}

module.exports = {
  title,
  run
}
