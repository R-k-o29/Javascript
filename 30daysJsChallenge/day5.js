// Task1
const n=5;
checkEvenOdd(n);
function checkEvenOdd(n){
    if(n%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

// Task2
let computeSquare = (num)=>{
    console.log(num*num);
}
const n = 5;
computeSquare(n);

// Task3
let findMax = (num1,num2)=>{
    if(num1>num2){
        console.log("Max :",num1);
    }else if(num1<num2){
        console.log("Max :",num2);
    }else{
        console.log("Both are equal");
    }
}
const n = 5;
const m=4
findMax(n,m);

//Task4
let concatenate = (str1,str2)=>{
    console.log(str1+str2);
}
let n='Rohit';
let m=' kumar'
concatenate(n,m);

// Task5
let sumation=(n,m)=>{
    console.log(n+m);
}
const a=4;
const b=5;
sumation(a,b)

//Task6
let check=(str1,str2)=>{
    if(str1.includes(str2)){
        return true;
    }else{
        return false;
    }
}
let a='Rohit kumar';
let b='z';
console.log(check(a,b)); //output:false

//Task7
let mul=(num1,num2=1)=>{
    return num1*num2;
}
const a=12;
const b=5;
console.log(`Product of ${a} and ${b} is : ${mul(a,b)}`);

//Task8
let greet=(name,age=18)=>{
    console.log(`Hey there ${name}! Congratulations on turning ${age}`);
}
let name='Rohit';
greet(name);

//Task9
let repeatfun=(fun=()=>{
    console.log('Hello guys');
},num)=>{
    for(let i=0;i<num;i++){
        fun();
    }
}
let num=5;
repeatfun(undefined,5);

//Task10
function applyFunctions(func1, func2, value) {
    const firstResult = func1(value);
    const finalResult = func2(firstResult);
    return finalResult;
}
function double(x) {
    return x * 2;
}
function addThree(x) {
    return x + 3;
}
const value = 5;
const result = applyFunctions(double, addThree, value);

console.log(result); // Output: 13
