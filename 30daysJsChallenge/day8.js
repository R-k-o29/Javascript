const name = "Rohit";
const age = 21;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

const multiLineString = `This is a multi-line string.
It spans multiple lines.
Each line is separate.`;
console.log(multiLineString);

const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first, second); // Output: 1 2

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925
};
const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);

const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5, 6];
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 2)); // Output: 10
console.log(multiply(5));    // Output: 5

const name = "Rohit";
const age = 21;

const person = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

console.log(person);
person.greet();

const propName = "dynamicProperty";
const obj = {
  [propName]: "This is a dynamic property value."
};
console.log(obj);
