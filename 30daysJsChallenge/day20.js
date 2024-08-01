// TASK3
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>DAY - 20</h1>
  <form id="userform" action="">
    <label for="name">Name:</label>
    <input type="text" name="" id="name">
    <label for="email">Email:</label>
    <input type="text" name="" id="email">
    <button type="submit" id="submit">Submit to show</button>
  </form>

  <p id="showdata"></p>
  

  <script>
    document.getElementById("userform").addEventListener("submit",(e)=>{
           e.preventDefault();
           const name=document.getElementById("name").value;
           const email=document.getElementById("email").value;
           const obj={ name , email };
           localStorage.setItem("formdata",JSON.stringify(obj));
           display();
    })

    const display=()=>{
      const save=JSON.parse(localStorage.getItem("formdata"));
      if(save){
        document.getElementById("showdata").textContent=`Name : ${save.name} | Email : ${save.email}`;
      }
    }
    display();

  </script>
</body>
</html>
