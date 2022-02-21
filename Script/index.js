document.querySelector("#form").addEventListener("submit", myFormSubmit);
var dataBase=JSON.parse(localStorage.getItem("studentDataBase"))||[]
function myFormSubmit(event) {
  event.preventDefault();
 
    var name= document.querySelector("#name").value
    var age = document.querySelector("#age").value
    var gender = document.querySelector("#gender").value
    var email = document.querySelector("#email").value
    var phone = document.querySelector("#phone").value
  
  
//   console.log(name,age,gender,email)
var studObj ={
    "name":name,
    "age":age,
    "gender":gender,
    "email":email,
    "phone":phone
}
    dataBase.push(studObj)
    console.log(dataBase)
    localStorage.setItem("studentDataBase",JSON.stringify(dataBase))
    
}
