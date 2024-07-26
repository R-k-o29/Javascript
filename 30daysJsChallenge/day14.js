//Task 1
class Person{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    greet=()=>{
        console.log(`Hey I'm ${this.name}.I'm ${this.age} years old.`);
    }
}

const person=new Person('Rohit',21);
person.greet();

//Task 2
class Person{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    greet=()=>{
        console.log(`Hey I'm ${this.name}.I'm ${this.age} years old.`);
    }
    update=(newAge)=>{
        this.age=newAge;
        console.log(`Updated Age : ${this.age}`);
    }
}

const person=new Person('Rohit',21);
person.greet();
person.update(18);
person.greet();

//Task 3
class Person{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    greet=()=>{
        console.log(`Hey I'm ${this.name}.I'm ${this.age} years old.`);
    }
    update=(newAge)=>{
        this.age=newAge;
        console.log(`Updated Age : ${this.age}`);
    }
}
class student extends Person{
    constructor(name,age,Id){
        super(name,age)
        this.Id=Id;
    }
    showId=()=>{
        console.log(`Id is : ${this.Id} of Student name: ${this.name}`);
    }
}
const person=new student('Rohit',21,6611);
person.showId();

//Task 4
class Person{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    greet=()=>{
        console.log(`Hey I'm ${this.name}.I'm ${this.age} years old.`);
    }
    update=(newAge)=>{
        this.age=newAge;
        console.log(`Updated Age : ${this.age}`);
    }
}
class student extends Person{
    constructor(name,age,Id){
        super(name,age)
        this.Id=Id;
    }
    showId=()=>{
        console.log(`Id is : ${this.Id} of Student name: ${this.name}`);
    }
    greet=()=>{
        console.log(`Hey I'm ${this.name}.I'm ${this.age} years old.My Id is ${this.Id}`);
    }
}
const person=new student('Rohit',21,6611);
person.greet();

//Task 5
class Person{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    greet=()=>{
        console.log(`Hey I'm ${this.name}.I'm ${this.age} years old.`);
    }
    static update=(newAge)=>{
        this.age=newAge;
        console.log(`Updated Age : ${this.age}`);
    }
}

// const person1 = new Person("Rohit", 21);
Person.update(16);

//Task 6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class student extends Person {
  static increment=0;
  constructor(name, age, Id) {
    super(name, age);
    this.Id = Id;
    student.increment++;
  }
}
const person1 = new student("Rohit", 21, 6611);
const person2 = new student("Rohit", 21, 6612);
const person3 = new student("Rohit", 21, 6613);

console.log(student.increment);

//TASK 7
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  get fullname(){
    return `${this.firstname} ${this.lastname}`;
  }
}

const person1 = new Person('Rohit','Ojha');
console.log(person1.fullname);

//TASK 8
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  get fullname(){
    return `${this.firstname} ${this.lastname}`;
  }
  set fullname(name){
    const [firstname,lastname]=name.split(' ');
    this.firstname=firstname;
    this.lastname=lastname;
  }
}

const person1 = new Person('Rohit','Ojha');
person1.fullname='Tanuja maurya';
console.log(person1.fullname);

//TASK 9 & 10
class Account{
  #balance
  constructor(initBal=0){
    this.#balance=initBal;
  }
  deposit(amount){
    if(amount<0){
      console.log("Enter valid amount");
    }else{
      this.#balance+=amount;
      console.log(`Deposited ${amount}. Balance : ${this.#balance}`);
    }
  }
  withdraw(amount){
    if(amount>0 && amount<=this.#balance){
      this.#balance-=amount;
      console.log(`Withdrawn ${amount}. Balance: ${this.#balance}`);
    }else{
      console.log("Enter valid amount");
    }
  }
}
const bank=new Account(2000);
bank.deposit(500);
bank.withdraw(2499);






