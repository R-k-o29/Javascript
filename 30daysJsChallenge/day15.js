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

//TASK6
