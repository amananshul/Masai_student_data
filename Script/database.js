var regUser = JSON.parse(localStorage.getItem("studentDataBase"));
// console.log(regUser)
var accepted = JSON.parse(localStorage.getItem("admitted")) || [];

var rejected = JSON.parse(localStorage.getItem("rejected")) || [];
regUser.map(function (elem, index) {
  var row = document.createElement("tr");

  var col1 = document.createElement("td");

  col1.innerHTML = elem.name;
  var col2 = document.createElement("td");
  col2.innerHTML = elem.age;

  var col3 = document.createElement("td");
  col3.innerHTML = elem.gender;

  var col4 = document.createElement("td");
  col4.innerHTML = elem.email;

  var col5 = document.createElement("td");
  col5.innerHTML = elem.phone;

//   col8 = document.createElement("td");
//   col8.innerHTML="<button>mark</button>"

  var col6 = document.createElement("td");
  col6.innerHTML = "<button>Accept</button>"
  col6.addEventListener("click", function () {
    acceptStud(elem);
  });
  var col7 = document.createElement("td");
   col7.innerHTML = "<button>Reject</button>"
  col7.addEventListener("click", function () {
    rejectedStud(elem);
  });

  row.append(col1, col2, col3, col4, col5, col6, col7);
  document.querySelector("#body").append(row);
});
function acceptStud(elem) {
  accepted.push(elem);
  localStorage.setItem("admitted", JSON.stringify(accepted));
}
function rejectedStud(elem) {
  rejected.push(elem);
  console.log(rejected);
  localStorage.setItem("rejected", JSON.stringify(rejected));
}
