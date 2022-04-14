import Fuse from "fuse.js";

//

//bütün ekrana yazdırma işlemini inputtan gelen değeri mainfunc. atarak başlatıyoruz
function mainFunction(userInput) {
  //fetch ile apidan gelen datayı jsona parse ederek datafilter funct göndriyoruz
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((apiRespond) => apiRespond.json())
    .then((foodData) => dataFilter(foodData, userInput));
}
//jsona parse edilmiş datayı ve input değerini alarak fuse.js ile api datasında arama yapıyoruz
const dataFilter = (foodData, userInput) => {
  const fuse = new Fuse(foodData, {
    keys: ["id", "title"],
  });
  //arama sonucunu searchResults değişkenine atayoruz
  const searchResults = fuse.search(userInput);

  //listMaker funct. eşleşen sonuçları gönderiyoruz
  listMaker(searchResults);
};

//eşleşmesi olan elemanları list olarak yazdırmak için
const listMaker = (foodThatSearched) => {
  const lengthOfSearchedData = foodThatSearched.length;
  const searcedDataStorage = [];

  foodThatSearched.forEach((element) => {
    searcedDataStorage.push(element);
    console.log(searcedDataStorage);
  });
  for (var i = 0; i < 12; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "new-div");
    const newH = document.createElement("h5");
    const selectedDiv = document.getElementById("searched-food-DOM");
    selectedDiv.append(newDiv);
    newH.innerText = searcedDataStorage[i].item.title;
    newDiv.appendChild(newH);
  }
};
export default mainFunction;
