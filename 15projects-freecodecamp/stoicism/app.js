const personYear = document.getElementById("person-year");
const personAbout = document.getElementById("person-about");
const btns = document.querySelectorAll(".btns");

let clickedBtn = "default";

// DATA FROM APİ ACCESIBLE FROM EVERYWHERE
// fetch("users.json")
//   .then((res) => {
//     return (res = res.json());
//   })
//   .then((result) => {
//     console.log(result[1].year);
//   });

// const getData = fetch("users.json")
//   .then((res) => {
//     return (res = res.json());
//   })
//   .then((result) => {
//     // console.log(result[1].year);
//     return result;
//   });

async function getRandomUser() {
  const response = await fetch("users.json");
  const jsonResponse = await response.json();
}

console.log(getData);

//Tells us which btn is clicked.
btns.forEach((element) => {
  element.addEventListener("click", (element) => {
    // console.log(element.pageX); || Xdeki konumunu alıyoruz bölece
  });
});
// fonk. içine paslanan değerlere arguments denir
