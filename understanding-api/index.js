// For now show must go on with spaghetti code muct later i ll laugh to this

const allBtns = document.querySelectorAll("button");
const allUserInfo = document.querySelectorAll("p");

let newUsersArray = [];
let istenilenDegerler = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((value) => value.json())
  .then((usersData) => {
    newUsersArray = [...usersData];
    cardCreator(newUsersArray);
  });

// Here, we are understanding which button is clicked,
// and passing its id to the another func
allBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    let filterId = e.target.id;
    deneme2(filterId);
  });
});

//Our purpose is compare buttons id and api users dedicated property.
function deneme2(filterId) {
  allUserInfo.forEach((e) => {
    if (e.dataset.id === filterId) {
      //   e.innerHTML = ;
    }
  });
}

function cardCreator(value) {
  //e== item b==index böylece her e==paragraf elemntinin 0.==yani b. elamanın.emaili atanmış oluyor
  allUserInfo.forEach((e, b) => {
    e.textContent = value[b].email;
  });
}
cardCreator();
