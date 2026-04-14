# JavaScript Beginner Course Plan (6 Classes)

Environment:

- Single file setup (`index.js`)
- Run with Node.js (`node index.js`)
- Focus on understanding the language before frameworks

Structure:

6 classes × 3 hours each

Progression:

1. Fundamentals
2. Control Flow + Data Structures
3. Functions + ES6
4. Object-Oriented JavaScript + Prototypes
5. Functional Programming
6. Functional Patterns + Mini Project

---

# Class 1 — JavaScript Fundamentals

Goal: Understand the language basics and run simple programs.

## Topics

### 1. What JavaScript Is

- Scripting language
- Node vs Browser
- Running a `.js` file

Example

```jsx
console.log("Hello world")
```

### 2. Variables

- `var`
- `let`
- `const`
- Naming conventions

Example

```jsx
const name = "John"
let age = 25
```

### 3. Primitive Types

- string
- number
- boolean
- null
- undefined

### 4. Console Output

```jsx
console.log("User:", name)
console.log("Age:", age)
```

### 5. Operators

Arithmetic

```
+ - * /
```

Comparison

```
=== !== > <
```

Logical

```
&& || !
```

## Exercises

- Store a user name and age
- Print user information
- Create a simple calculator
- Compare two ages

---

# Class 2 — Control Flow and Data Structures

Goal: Teach decision-making and collections.

## Topics

### 1. Conditional Logic

```jsx
if (age >= 18) {
  console.log("Adult")
} else {
  console.log("Minor")
}
```

Concepts

- `if`
- `else`
- `else if`

### 2. Switch Statements

```jsx
switch(role) {
  case "admin":
    console.log("Admin user")
    break
}
```

### 3. Arrays

```jsx
const fruits = ["apple", "banana", "orange"]
```

Concepts

- Accessing values
- `.push()`
- `.length`

### 4. Objects

```jsx
const user = {
  name: "John",
  age: 30
}
```

Concepts

- key/value pairs
- property access

### 5. Loops

`for`

```jsx
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

`while`

## Exercises

- Print numbers 1–10
- Iterate through arrays
- Search for a value inside an array
- Sum numbers inside an array

---

# Class 3 — Functions and ES6 Basics

Goal: Introduce modular thinking and modern JavaScript syntax.

## Topics

### 1. Functions

```jsx
function sum(a, b) {
  return a + b
}
```

Concepts

- parameters
- return values
- reuse

### 2. Arrow Functions

```jsx
const sum = (a, b) => a + b
```

### 3. Template Strings

```jsx
const name = "John"
console.log(`Hello ${name}`)
```

### 4. Destructuring

Objects

```jsx
const { name, age } = user
```

Arrays

```jsx
const [first, second] = numbers
```

### 5. Spread Operator

```jsx
const newArray = [...oldArray]
```

## Exercises

- Greeting function
- Merge two arrays
- Extract properties from objects
- Create reusable utility functions

---

# Class 4 — Object-Oriented JavaScript and Prototypes

Goal: Explain how JavaScript implements OOP.

Important concept:

JavaScript is **prototype-based**, not class-based.

Classes are **syntactic sugar**.

## Topics

### 1. Objects with Methods

```jsx
const user = {
  name: "John",
  greet() {
    console.log("Hello " + this.name)
  }
}
```

Concepts

- `this`
- methods

### 2. Constructor Functions

```jsx
function User(name, age) {
  this.name = name
  this.age = age
}
```

Creating instances

```jsx
const user1 = new User("John", 30)
```

### 3. Prototypes

Methods shared through prototypes

```jsx
User.prototype.greet = function () {
  console.log("Hello " + this.name)
}
```

Concepts

- prototype chain
- shared methods
- memory efficiency

### 4. ES6 Classes

```jsx
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log("Hello " + this.name)
  }
}
```

### 5. Inheritance

```jsx
class Admin extends User {
  deleteUser() {
    console.log("User deleted")
  }
}
```

Concepts

- `extends`
- `super`

## Exercises

- Create `User` class
- Create `Admin` class
- Add shared methods
- Instantiate multiple objects

---

# Class 5 — Functional Programming

Goal: Introduce functional programming concepts common in modern JS.

## Topics

### 1. Higher Order Functions

Functions receiving functions.

```jsx
function run(fn) {
  fn()
}
```

### 2. Array Functional Methods

`map`

```jsx
numbers.map(n => n * 2)
```

`filter`

```jsx
numbers.filter(n => n > 10)
```

`reduce`

```jsx
numbers.reduce((acc, n) => acc + n, 0)
```

`forEach`

### 3. Immutability

Avoid mutation.

Bad

```jsx
array.push(10)
```

Better

```jsx
const newArray = [...array, 10]
```

## Exercises

- Double numbers
- Filter adults from a user list
- Sum numbers with `reduce`
- Transform objects inside arrays

---

# Class 6 — Functional Patterns and Mini Project

Goal: Combine all concepts into a practical example.

## Topics

### 1. Pure Functions

Same input → same output.

```jsx
const add = (a, b) => a + b
```

### 2. Function Composition

```jsx
const double = n => n * 2
const square = n => n * n
```

### 3. Data Transformation Pipelines

```jsx
const result = users
  .filter(u => u.age > 18)
  .map(u => u.name)
```

### 4. Mini Project

Build a simple **CLI-style User Manager**.

Features

```
users array

functions:
- addUser
- listUsers
- filterAdults
- calculateAverageAge
```

Concepts used

- arrays
- objects
- functions
- classes
- map/filter/reduce

---

# Recommended Structure Per Class

```
45 min  concept explanation
45 min  live coding
15 min  break
60 min  exercises
15 min  review
```