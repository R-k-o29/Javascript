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
