// Task1
let number = 3;
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Task2
let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// Task3
let num1 = 5, num2 = 10, num3 = 8;

if (num1 >= num2 && num1 >= num3) {
    console.log("Largest number is " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Largest number is " + num2);
} else {
    console.log("Largest number is " + num3);
}

// Task4
let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day number";
}
console.log(dayName);

// Task5
let score = 85;
let grade;

switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
}
console.log(grade);

// Task6
let num = 4;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result); // Output: Even

//Task7
let year = 2024;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(isLeapYear ? "Leap Year" : "Not a Leap Year"); // Output: Leap Year

// Number Check Script
function checkNumber(number) {
    if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
checkNumber(5);  // Output: Positive
checkNumber(-2); // Output: Negative
checkNumber(0);  // Output: Zero

//Voting Eligibility Script
function checkVotingEligibility(age) {
    console.log(age >= 18 ? "Eligible to vote" : "Not eligible to vote");
}
checkVotingEligibility(20); // Output: Eligible to vote
checkVotingEligibility(15); // Output: Not eligible to vote

// Day of the Week Script
function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1: dayName = "Sunday"; break;
        case 2: dayName = "Monday"; break;
        case 3: dayName = "Tuesday"; break;
        case 4: dayName = "Wednesday"; break;
        case 5: dayName = "Thursday"; break;
        case 6: dayName = "Friday"; break;
        case 7: dayName = "Saturday"; break;
        default: dayName = "Invalid day number";
    }
    console.log(dayName);
}
getDayName(3); // Output: Tuesday

//Grade Assignment Script
function getGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90): grade = 'A'; break;
        case (score >= 80): grade = 'B'; break;
        case (score >= 70): grade = 'C'; break;
        case (score >= 60): grade = 'D'; break;
        default: grade = 'F';
    }
    console.log(grade);
}
getGrade(85); // Output: B

//Leap Year Check Script
function isLeapYear(year) {
    let result = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? "Leap Year" : "Not a Leap Year";
    console.log(result);
}
isLeapYear(2024); // Output: Leap Year
isLeapYear(1900); // Output: Not a Leap Year
