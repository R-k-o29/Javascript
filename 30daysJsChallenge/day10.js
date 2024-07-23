<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DAY-10</title>
  <style>
    
  </style>
</head>
<body>
  <h1>task1</h1>
  <p id="para">This is the beginning text</p>
  <button type="button" id="changetext">Click to change text</button><br>
  <h1>task2</h1>
  <img src="https://th.bing.com/th/id/OIP.6GOozC1uOQ7CvxmELlxfJgHaEL?w=500&h=282&rs=1&pid=ImgDetMain" id="image" alt="">
  <h1>task3</h1>
  <button id="color">Click to change color</button>
  <h1>task4</h1>
  <button id="color2">Reset color to blue</button>
  <h1>task5</h1>
  <input type="text" name="" id="text" placeholder="Type here">
  <h1>task6</h1>
  <p id="inputtext"></p>
  <input type="text" name="" id="textinput" placeholder="Write here">
  <h1>task7</h1>
  <form id="myForm">
        <input type="text" name="username" placeholder="Username">
        <input type="password" name="password" placeholder="Password">
        <button type="submit">Submit</button>
  </form>
  <h1>task8</h1>
  <p id="update"></p>
  <select name="" id="values">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  <h1>task9</h1>
  <ul id="list">
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
  </ul>
  <h1>task10</h1>
  <button type="button" id="additem">Click to Add item</button>
  <li id="dynamic">
  </li>
  
  <script src="scriptt.js"></script>
</body>
</html>



JS-Code

// TASK1
const element=document.getElementById("para");
const button=document.getElementById("changetext");
button.addEventListener("click",()=>{
    element.textContent="New text content";
});
//TASK2
const image=document.getElementById("image");
image.addEventListener("dblclick",()=>{
    image.style.visibility="hidden";
})
//TASK3
const color=document.getElementById("color");
color.addEventListener("mouseover",()=>{
    color.style.backgroundColor="Yellow";
})
//TASK4
const colorr=document.getElementById("color2");
colorr.addEventListener("mouseout",()=>{
    colorr.style.backgroundColor="Blue";
})
//TASK5
const pressed=document.getElementById("text");
pressed.addEventListener("keydown",(e)=>{
    console.log("Key pressed: ",e.key);
})
//TASK6
const inputtext=document.getElementById("inputtext");
const text=document.getElementById("textinput");
text.addEventListener("keyup",(e)=>{
    inputtext.textContent=`current text: ${text.value}`;
});
//TASK7
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents the default form submission
  const formData = new FormData(form);
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});

//TASK8
const value=document.getElementById("values");
const update=document.getElementById("update");
value.addEventListener("change",()=>{
    update.textContent=`selected option: ${value.value}`;
});
//TASK9
const list=document.getElementById("list");
list.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        console.log(`clicked value : ${e.target.textContent}`);
    }
});
//TASK10
const dynamic=document.getElementById("dynamic");
const newitem=document.getElementById("additem");
newitem.addEventListener("click",()=>{
    const newelement=document.createElement("LI");
    newelement.textContent=`New item ${dynamic.children.length + 1}`;
    dynamic.appendChild(newelement);
})
