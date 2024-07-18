// TASK1
let arr=[1,2,3,4,5];
console.log(arr);

// TASK2
let arr=[1,2,3,4,5];
console.log(arr);
console.log('First element:',arr[0]);
console.log('Last element:',arr[arr.length-1]);

// TASK3
console.log(arr.push(22)); //output: [ 1, 2, 3, 4, 5, 22 ]

// TASK4
console.log(arr.pop());  //output: [ 1, 2, 3, 4, 5]

// TASK5
arr.shift();
console.log(arr); //output: [ 2, 3, 4, 5 ]

// TASK6
arr.unshift(45);
console.log(arr); //OUTPUT: [ 45, 2, 3, 4, 5 ]

//TASK7
let arr=[1,2,3,4,5];
console.log(arr);
let doubledArray = arr.map((num) => num * 2);
console.log("Doubled array:", doubledArray);
//output : [ 1, 2, 3, 4, 5 ] Doubled array: [ 2, 4, 6, 8, 10 ]

//TASK8
let evenArray = arr.filter((num)=>num%2===0);
console.log(evenArray); //output : [ 2 , 4 ]

// TASK9
let sum= arr.reduce((acc,num)=>{
    return acc+num;
},0);
console.log(sum); // output: 15

//TASK10
let arr=[1,2,3,4,5];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//TASK11
let arr=[1,2,3,4,5];
arr.forEach(e => {
    console.log(e);
});

// TASK12
let arr=[[1,2,3],[4,5,6],[7,8,9]];
arr.forEach(e => {
    console.log(e);
});

// TASK13
console.log("Element at row 1, column 2:", matrix[0][1]); // Accessing element '2' from the matrix
console.log("Element at row 3, column 3:", matrix[2][2]); // Accessing element '9' from the matrix
