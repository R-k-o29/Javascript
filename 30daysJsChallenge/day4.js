// Task1
for(let i=1;i<=10;i++){
    console.log(i);
}

// Task2
for(let i=1;i<=10;i++){
    console.log(i*5);
}

//Task3
let sum=0;
let i=1;
while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);

//Task4
let i=10;
while(i>=1){
    console.log(i);
    i--;
}

// Task5
let i=1;
do{
    console.log(i);
    i++;
}while(i<=5);

//Task6
let i=1;
let number=5;
let fact=1;
do{
    fact*=i
    i++;
}while(i<=number);
console.log(fact);

//Task7
for(let i=0;i<=5;i++){
    let row='';
    for(let j=0;j<i;j++){
        row+='* ';
    }
    console.log(row);
}

// Task8
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }console.log(i);
}

// Task9
for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }console.log(i);
}

