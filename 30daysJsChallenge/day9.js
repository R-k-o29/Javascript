HTML CODE:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

</head>
<body>
  <h1 id="element">This is html element</h1>
  <div class="bluish" >Background color blue</div>

  <ul id="ullist">
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>

  <img id="image" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msMCg.img" alt="">

  <p id="para">Hi this is rohit kumar ojha</p>

  <button type="button" id="button">Click to change content</button>

  <div id="div3" style="border: 1px solid red;"> Temporary </div>
  
 <script src="scriptt.js"></script>
</body>
</html>


TASKS - DAY_9

//TASK1
const element=document.getElementById("element");
element.textContent="This is new text";
//TASK2
document.querySelector(".bluish").style.backgroundColor = "red";
//Task3
let newDiv=document.createElement("div");
newDiv.textContent="This is new div";
document.body.appendChild(newDiv);

//Task4
let lielem=document.createElement("li");
lielem.textContent="Four";
let list=document.getElementById("ullist");
list.appendChild(lielem);

//Task5
document.body.removeChild(newDiv);

//task6
list.removeChild(list.lastElementChild);

//task7
document.querySelector("#image").setAttribute("src","https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1pi6cq.img?w=768&h=432&m=6&x=387&y=151&s=179&d=179");

// task8
// let element = document.querySelector(".myClass");
// element.classList.add("newClass");
// element.classList.remove("oldClass");

//task9
const button=document.getElementById("button");
const para=document.getElementById("para");
button.addEventListener("click",()=>{
    para.textContent="This is new content";
})

//task10
const div3=document.getElementById("div3");
div3.addEventListener("mouseover",()=>{
    div3.style.borderColor="blue";
})
