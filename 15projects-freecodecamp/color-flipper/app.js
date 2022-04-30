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

function hexCodesDigit() {
  //In Hex Code all digits are either can be number or character
  //So firstly, randomNumberGen func. will decide that. 0(number)-1(char).
  for (let i = 0; i < 7; i++) {
    if (randomNumberGen(2) === 0) {
      //Here when randomNumber===0, we will take our digit from numbers array.
      hexCodeTotal(numbers[randomNumberGen(10)]);
    } else {
      hexCodeTotal(characters[randomNumberGen(26)]);
    }
  }
}

//Hex code array variable
let hexCode = [];

//hex code digits are pushing in hex code array to make random hex code
function hexCodeTotal(adigit) {
  hexCode.push(adigit);
  return hexCode;
}

//just for green box not gonna lie
colorGeneratorBtn.addEventListener("click", () => {
  console.log(hexCodesDigit());
});
