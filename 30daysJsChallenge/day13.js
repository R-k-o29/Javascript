<h1>TASK 1</h1>

//module 1 : one.js
const add=(a,b)=>{
    return a+b;
}

module.exports={add};

//module 2 : two.js
const mod=require("./one");
console.log("Sum : ",mod.add(4,5));


//TASK 2 
