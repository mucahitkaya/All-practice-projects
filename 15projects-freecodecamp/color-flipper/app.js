//Getting dom elements
const colorGeneratorBtn = document.getElementById("color-generator");
const colorCode = document.getElementById("current-color");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

/* Hex Colors:  #c3d232 random number and char
 Rgba Colors: rgba(0-255,0-255,0-255);
 I need to create random hex code and rgba. To do create 
 random hex color i need random char and number. Basically
 i will create one func and that func. will take different parameter
 depends on where to use.Ex for char its gonna be between  
*/

function randomNumberGen(value) {
  let randomNumber = Math.floor(Math.random() * value);
  return randomNumber;
}

function randomHexCodeGen() {
  let randomHexCode = characters[2] + randomNumberGen(7);
  console.log(randomHexCode);
}

colorGeneratorBtn.addEventListener("click", () => {
  colorCode.textContent = randomNumberGen(5);
});
