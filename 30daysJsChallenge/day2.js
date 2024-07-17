// Task1
let a = 5;
let b = 3;
console.log(a + b); // Output: 8

// Task2
let c = 10;
let d = 4;
console.log(c - d); // Output: 6

// Task3
let e = 7;
let f = 6;
console.log(e * f); // Output: 42

// Task4
let g = 20;
let h = 5;
console.log(g / h); // Output: 4

// Task5
let i = 10;
let j = 3;
console.log(i % j); // Output: 1

//Task6
let k = 15;
k += 5;
console.log(k); // Output: 20

//Task7
let l = 25;
l -= 10;
console.log(l); // Output: 15

// Task8
let m = 8;
let n = 12;
console.log(m > n); // Output: false
console.log(m < n); // Output: true

// Task9
let o = 9;
let p = 9;
console.log(o >= p); // Output: true
console.log(o <= p); // Output: true

// Task10
let q = 10;
let r = "10";
console.log(q == r);  // Output: true (type coercion)
console.log(q === r); // Output: false (strict equality, no type coercion)

// Task11
let s = 5;
let t = 10;
console.log(s < 10 && t > 5); // Output: true

// Task12
let u = 5;
let v = 10;
console.log(u < 10 || v < 5); // Output: true

// Task13
let w = 5;
console.log(!(w > 10)); // Output: true

// Task14
let x = -3;
let result = (x >= 0) ? "Positive" : "Negative";
console.log(result); // Output: Negative

// Arithmetic Operations Script
function arithmeticOperations(a, b) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
    console.log("Division:", a / b);
    console.log("Remainder:", a % b);
}
arithmeticOperations(15, 4);

// Comparison and Logical Operators Script
function compareAndLogical(x, y) {
    console.log("x > y:", x > y);
    console.log("x < y:", x < y);
    console.log("x >= y:", x >= y);
    console.log("x <= y:", x <= y);
    console.log("x == y:", x == y);
    console.log("x === y:", x === y);
    console.log("x < 10 && y > 5:", x < 10 && y > 5);
    console.log("x < 10 || y < 5:", x < 10 || y < 5);
    console.log("!(x > 10):", !(x > 10));
}
compareAndLogical(8, 10);

// Ternary Operator Script
function checkSign(number) {
    let result = (number >= 0) ? "Positive" : "Negative";
    console.log(result);
}
checkSign(-3);
checkSign(5);

