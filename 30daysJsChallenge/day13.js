// TASK 1

//module 1 : one.js
const add=(a,b)=>{
    return a+b;
}

module.exports={add};

//module 2 : two.js
const mod=require("./one");
console.log("Sum : ",mod.add(4,5));
// -------------------------------------------------------------------------------------------------------
//TASK 2 

//module 1: one.js
const person={
    name : "Rohit",
    age : 22,
    Gender : "Male" ,
    printName : ()=>{
        console.log(`This is ${person.name}`);
    },
    printAge : ()=>{
        console.log(`${person.name}'s age is ${person.age}`);
    }
}

module.exports = {person};

//module2: two.js
const mod=require("./one");

console.log(mod.person.name);
mod.person.printAge();
console.log(mod.person.Gender);
// -------------------------------------------------------------------------------------------------------
//TASK 3
//module 1: one.js
export const name = ()=>{
    console.log("Rohit");
};
//module2: two.js
import name  from "./one";
name();
// -------------------------------------------------------------------------------------------------------
//TASK 4
//module 1: one.js
export default greet = ()=>{
    console.log("Hello");
}
//module2: two.js
import name from "./two";
name();

// -------------------------------------------------------------------------------------------------------
//TASK 6
var _ = require('lodash');// run in terminal ( npm i --save lodash )
const arr=[1,2,3,4,5];
const chuncked=_.chunk(arr,2);
console.log(chuncked);

// -------------------------------------------------------------------------------------------------------
//TASK 7

const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
// -------------------------------------------------------------------------------------------------------
//TASK 8
