const personYear = document.getElementById("person-year");
const personAbout = document.getElementById("person-about");
const btns = document.querySelectorAll(".btns");

let clickedBtn = "def";

//When page loaded,callback(below) will work,and it will get local json file with fetch

fetch("users.json")
  .then((res) => res.json())
  .then((result) => {
    //Array for api data
    console.log(typeof result);
    //   console.log(persons[1].name);
  });

//Tells us which btn is clicked.
btns.forEach((element) => {
  element.addEventListener("click", (element) => {
    // console.log(element.pageX); || Xdeki konumunu alıyoruz bölece
    clickedBtn = element.target.id;
  });
});
// fonk. içine paslanan değerlere arguments denir
