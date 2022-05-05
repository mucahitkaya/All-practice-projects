//Getting Dom elements
const btns = document.querySelectorAll(".dayyum");
const counterText = document.getElementById("counter");
let counter = 0;
btns.forEach((buttonElement) => {
  buttonElement.addEventListener("click", () => {
    if (buttonElement.id == "increase") {
      console.log(buttonElement.id);
      counter += 1;
      counterText.textContent = counter;
    } else if (buttonElement.id == "reset") {
      counter = 0;
      counterText.textContent = counter;
    }
    if (buttonElement.id == "decrease") {
      counter -= 1;
      counterText.textContent = counter;
    }
  });
});

/*
switch (buttonElement.id) {
      case "increase":
        counter += 1;
        counterText.textContent = counter;
      case "reset":
        counter = 0;
      case "decrease":
        counter -= 1;
      default:
        counter = 0;
    }
*/
