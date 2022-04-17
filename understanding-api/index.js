const allBtns = document.querySelectorAll("button");

allBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.id);
  });
});
