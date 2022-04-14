let allChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "x",
  "y",
  "z",
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
  "R",
  "S",
  "T",
  "U",
  "X",
  "Y",
  "Z",
  ",",
  ".",
  "-",
  "$",
  "!",
  "&",
  "",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
let password = "";
let finalPassWord = [];
const passwordContainer1 = document.querySelector("#pass-container1");
const passwordContainer2 = document.querySelector("#pass-container2");
const passwordContainer3 = document.querySelector("#pass-container3");
const passwordContainer4 = document.querySelector("#pass-container4");
const btn = document.querySelector("#password-generator");

mainGenerator = () => {
  let randomNumber = Math.floor(Math.random() * allChars.length);
  return randomNumber;
};

console.log(finalPassWord);

btn.addEventListener("click", () => {
  for (let i = 0; i < 8; i++) {
    finalPassWord[i] = allChars[mainGenerator()];
  }
  passwordContainer.textContent = finalPassWord.join("");
  passwordContainer2.textContent = finalPassWord.join("");
  passwordContainer3.textContent = finalPassWord.join("");
  passwordContainer4.textContent = finalPassWord.join("");
});
