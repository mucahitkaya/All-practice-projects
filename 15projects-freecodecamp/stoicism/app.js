const personYear = document.getElementById("person-year");
const personAbout = document.getElementById("person-about");
const btns = document.querySelectorAll(".btns");

let clickedBtn = "default";

fetch("users.json")
  .then((res) => {
    return (res = res.json());
  })
  .then((result) => {
    console.log(result[1].year);
  });

//Tells us which btn is clicked.
btns.forEach((element) => {
  element.addEventListener("click", (element) => {
    // console.log(element.pageX); || Xdeki konumunu alıyoruz bölece
    clickedBtn = element.target.id;
  });
});
// fonk. içine paslanan değerlere arguments denir
