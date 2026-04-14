const numbers = [5, 12, 18, 27]

const users = [
  { id: 1, name: "Ana", age: 17, city: "Cuiaba" },
  { id: 2, name: "Bruno", age: 21, city: "Sao Paulo" },
  { id: 3, name: "Carla", age: 32, city: "Rio de Janeiro" },
  { id: 4, name: "Diego", age: 15, city: "Cuiaba" }
]

const orders = [
  { id: 101, customer: "Ana", total: 50, status: "paid" },
  { id: 102, customer: "Bruno", total: 120, status: "paid" },
  { id: 103, customer: "Carla", total: 80, status: "pending" }
]

module.exports = {
  numbers,
  users,
  orders
}
