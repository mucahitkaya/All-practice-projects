const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  // this references hamburger here
  this.classList.toggle("is-active");
});
