// program.js — JavaScript Basics for Beginners

// 1. Variables and Data Types
let name = "Saneep";
let age = 30;
let isDeveloper = true;
let score = null;
let x; // undefined

console.log("Name:", name);
console.log("Age:", age);

// 2. Arithmetic Operations
let a = 10,
  b = 5;
console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Quotient:", a / b);

// 3. Conditional Statements
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// 4. Loops
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

let count = 0;
while (count < 3) {
  console.log("While loop:", count);
  count++;
}

// 5. Functions
function greet(user) {
  return `Hello, ${user}!`;
}
console.log(greet("Saneep"));

// 6. Arrays
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
console.log("Fruits:", fruits);
console.log("First fruit:", fruits[0]);

// 7. Objects
let person = {
  name: "Saneep",
  age: 30,
  isDeveloper: true,
};
console.log("Person:", person);
console.log("Person's name:", person.name);

// 8. Basic DOM Manipulation (for browser)
document.body.innerHTML += "<h2>Welcome to JavaScript Basics!</h2>";

// 9. Event Handling (for browser)
document.body.onclick = function () {
  alert("You clicked the page!");
};

// 10. Simple Calculator Function
function calculator(x, y, operator) {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return y !== 0 ? x / y : "Cannot divide by zero";
    default:
      return "Invalid operator";
  }
}
console.log("Calc:", calculator(10, 5, "*"));
