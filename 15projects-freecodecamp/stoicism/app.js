const personYear = document.getElementById("person-year");
const personAbout = document.getElementById("person-about");
const btns = document.querySelectorAll(".btns");

let clickedBtn = "def";
//When page loaded,callback(below) will work,and it will get local json file with fetch
window.addEventListener("DOMContentLoaded", function () {
  fetch("users.json")
    .then((res) => res.json())
    .then((result) => {
      //array for api dataü
      let persons = result;
      personChanger(result);
      //   console.log(persons[1].name);
    });
});
btns.forEach((element) => {
  element.addEventListener("click", (element) => {
    // console.log(element.pageX); // Xdeki konumunu alıyoruz bölece
    clickedBtn = element.target.id;
    personChanger(clickedBtn);
  });
});

// fonk. içine paslanan değerlere arguments denir

function personChanger(clickedBtn, persons) {
  console.log(persons, clickedBtn);
}
