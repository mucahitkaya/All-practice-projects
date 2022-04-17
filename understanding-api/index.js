const allBtns = document.querySelectorAll("button");
const allUserInfo = document.querySelectorAll("p");

// Here, we are understanding which button is clicked,
// and passing its id to the another func
allBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    let filterId = e.target.id;
    deneme2(filterId);
  });
});

function deneme2(filterId) {
  allUserInfo.forEach((e) => {
    if (e.dataset.id === filterId) {
      console.log("asdasd");
    }
  });
}
deneme2();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((value) => value.json())
  .then((usersData) => console.log(usersData));
