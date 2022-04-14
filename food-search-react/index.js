import mainFunction from "./foods-data.js";

//kullanıcı adı için olan api'dan datayı çekerek writeName adlı func. gönderiyoruz
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((apiRespond) => apiRespond.json())
  .then((nameObject) => writeName(nameObject));

////writeName funct ile ekrana user name'i yazdırıyoruz
function writeName(nameObject) {
  const nameOfUser = document.getElementById("name-tag");
  nameOfUser.textContent = `Merhaba: ${nameObject.name}`;
}

const userInput = document.getElementById("search-box-input");

alert("Lütfen seçim işlemini 6 sn içersinde yapınız.");

userInput.addEventListener("change", () => {
  //873ms sonra çalışcak kod
  setTimeout(() => {
    mainFunction(userInput.value);
  }, 873);
  setInterval(() => {
    //6 sn sonra sayfa yenilenecek
    location.reload();
  }, 6000);
});
