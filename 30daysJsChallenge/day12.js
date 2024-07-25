//TASK1
const throwError=()=>{
    throw new Error("This is intentional mf!");
}
try{
    throwError();
}catch(e){
    console.log(e.message);
}

//TASK2
const divide=(a,b)=>{
    if(b==0){
        throw new Error("Error dividing by zero")
    }
    return a/b;
}

try{
    divide(10,0);
}catch(e){
    console.log(e.message);
}

//TASK3
try{
    console.log("First flow");
    throw new Error("Error caught")
}catch(e){
    console.log(e.message);
}finally{
    console.log("Final flow");
}

//TASK4
class customError extends Error{
    constructor(message){
        super(message);
        console.log("Its a custom error");
    }
}

const fun=()=>{
    throw new customError();
}

try{
    fun();
}catch(e){
    console.log(e.message);
}

//TASK5
class customError extends Error{
    constructor(message){
    super(message);
    this.name="customError";
}}

const input = (str)=>{
    if(str.length==0){
        throw new customError("name is blank");
        }
        console.log("Validated");

}

    try{
        console.log(input(""));
    }catch(e){
        console.log(e.message);
    }

//TASK 6 
const generate=()=>{
    return new Promise((resolve,reject)=>{
        let x=Math.random();
        if(x>0.5){
            resolve("Promise resolved")
        }else{
            reject("Rejected")
        }
    })
}

generate().then(message=>console.log(message)).catch(error=>console.log("Error:",error));

//TASK 7
const randomPromise=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Rejected");
        },2000)
    })
}

async function handleRandom(){
    try{
        const result=await randomPromise();
        console.log(result);
    }catch(e){
        console.log(e);
    }
}
handleRandom();

//TASK 8
fetch('invalid.url').then(respose =>{
    if(!respose.ok){
        throw new Error("Invalid response");
    }
    return respose.json();
}).then(data=>console.log(data)).catch(e=>console.error("Error :",e.message));

//TASK 9
async function random(){
    try{
        let respose= await fetch('invalid.url');
        if(!respose.ok){
            throw new Error('Invalid response generated');
        }
        let data = await respose.json();
        console.log(data);
    }catch(e){
        console.log(e.message);
    }
}
random();



