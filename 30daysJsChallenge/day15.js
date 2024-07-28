//TASK1
const outerFun = (outerVar)=>{
  return innerFun=()=>{
    console.log(outerVar);
  }
}
const fun=outerFun(20);
//console.log(fun());
fun();

//TASK2
const fun=()=>{
  let value=0;
  return {
    increment(){
      value+=1;
    },
    display(){
      return value;
    }
  }
}

const oper = fun();
oper.increment();
oper.increment();
console.log(oper.display());

//TASK3
const incrementId=()=>{
  let Id=0;
  return ()=>{
    Id+=1;
    return Id;
  }
}
const fun = incrementId();
console.log(fun());
console.log(fun());
console.log(fun());

//TASK4
const greet=(name)=>{
  return ()=>{
    console.log(`Hello ${name} kaisi ho!`);
  }
}
const fun = greet('Tanu');
fun();

//TASK5
const logIndex=()=>{
  let arrFun=[];
  for(let i=0;i<5;i++){
    arrFun.push(()=>{
        console.log(i); 
    })
  }
  return arrFun;

}

//TASK6
const collection=()=>{
  let arr=[]
  return{
    add(item){
      arr.push(item);
      console.log(arr);
    },
    remove(){
      arr.splice(0,1)
    },
    display(){
      return arr;
    }
  }
}

const coll=collection();
coll.add(3);
coll.add(4);
coll.remove();
console.log(coll.display());
const arr=logIndex();
arr[3]();

//TASK7
function fib() {
  const mem = {};
  return function fibonacci(num) {
    if (num in mem) {
      return mem[num];
    }

    if (num <= 1) return num;
    mem[num] = fibonacci(num - 2) + fibonacci(num - 1);
    return mem[num];
  };
}

const fibonacci = fib();
console.log(`Fibonacci of 9: ${fibonacci(9)}`);
console.log(`Fibonacci of 8: ${fibonacci(8)}`);

//TASK8
function factorial() {
  const cache = {};

  return function fact(num) {
    if (num in cache) return cache[num];

    if (num <= 1) {
      cache[num] = num;
      return num;
    }

    const result = num * fact(num - 1);
    cache[num] = result;
    return result;
  };
}
const fact = factorial();
console.log(`Factorial of 5 is ${fact(5)}`);
console.groupEnd();
