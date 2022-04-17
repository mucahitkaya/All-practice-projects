const allBtns = document.querySelectorAll("button");

// Here, we are understanding which button is clicked,
// and passing its id to the another func
allBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.id);
  });
});
