//Getting dom elements
const colorGeneratorBtn = document.getElementById("color-generator");
const colorCode = document.getElementById("current-color");

//digits are represents hexColors each digit.
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//Random func. is makes all this magic happen.Find random number from digits length.
function randomNumberGen() {
  let randomNumber = Math.floor(Math.random() * digits.length);
  return randomNumber;
}

//this is our main func. that loops to 6 to find 6 different char. of hex code
// and display color to the screen and shows color code in h2 text.
function hexCodesDigit() {
  //all hex codes starts with '#'
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += digits[randomNumberGen()];
  }

  //manipulating dom elements
  document.body.style.backgroundColor = hexColor;
  colorCode.textContent = hexColor;
}

colorGeneratorBtn.addEventListener("click", () => {
  hexCodesDigit();
});
