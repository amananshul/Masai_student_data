var admittedUser=JSON.parse(localStorage.getItem("admitted"))
console.log(admittedUser)
admittedUser.map(function(elem,index){
    var row = document.createElement("tr");

     var col1 = document.createElement("td");
    col1.innerHTML = elem.name;
    var col2 = document.createElement("td");
    col2.innerHTML = elem.age;
  
    var col3 = document.createElement("td");
    col3.innerHTML = elem.gender;
  
    var col4 = document.createElement("td");
    col4.innerHTML = elem.email;
  
    var col5=document.createElement("td");
    col5.innerHTML = elem.phone;
    
    row.append(col1, col2,col3,col4,col5);
    document.querySelector("#body").append(row);
})
 


