// TASK1
let book = {
    title : "Advanced Mathematics",
    Author : "RD Sharma",
    year : 2023
};
console.log(book);

// TASK2
let book = {
    title : "Advanced Mathematics",
    Author : "RD Sharma",
    year : 2023
};
console.log(`Title : ${book.title} , Author : ${book.Author}`);

// TASK3
let book = {
    title : "Advanced Mathematics",
    Author : "RD Sharma",
    year : 2023
};
book.getDetails=()=>{
    return `Author:${book.Author} and title:${book.title}`;
}
console.log(book.getDetails());

// TASK4
let book = {
    title : "Advanced Mathematics",
    Author : "RD Sharma",
    year : 2023
};
book.updateYear=(newYear)=>{
    book.year=newYear;
}
book.updateYear(2024);
console.log(book.year);

// TASK5
let library = {
  Name: "National library India",
  Books: [
    { title: "SpiderMan", author: "Stanley", year: 1989 },
    { title: "DeadPool", author: "Logan", year: 1999 },
    { title: "Blade", author: "Tiamut", year: 2009 },
  ]
};
console.log(library);

// TASK6
let library = {
  Name: "National library India",
  Books: [
    { title: "SpiderMan", author: "Stanley", year: 1989 },
    { title: "DeadPool", author: "Logan", year: 1999 },
    { title: "Blade", author: "Tiamut", year: 2009 },
  ]
};
console.log(library.Name);
library.Books.forEach((e)=>{
    console.log(e.title);
});

//TASK7
let book = {
  title: "Advanced Mathematics",
  Author: "RD Sharma",
  year: 2023,
};
book.getTitleAndYear = function () {
  return `Title: ${this.title}, Year: ${this.year}`;
};
console.log(book.getTitleAndYear());

// TASK8
let book = {
  title: "Advanced Mathematics",
  Author: "RD Sharma",
  year: 2023,
};
for (const prop in book) {
    if (book.hasOwnProperty(prop)) {
        console.log(`${prop} : ${book[prop]}`);
    }
}

// TASK9
let book = {
  title: "Advanced Mathematics",
  Author: "RD Sharma",
  year: 2023,
};
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));

