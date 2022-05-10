const personYear = document.getElementById("person-year");
const personAbout = document.getElementById("person-about");

//When page loaded,callback(below) will work,and it will get local json file with fetch
window.addEventListener("DOMContentLoaded", function () {
  fetch("users.json")
    .then((res) => res.json())
    .then((result) => {
      //array for api dataü
      let persons = result;
      console.log(persons[1].name);
    });
});
