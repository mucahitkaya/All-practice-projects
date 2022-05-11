const navToggle = document.querySelector(".nav-toggle");

const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  console.log(links.classList.contains("random")); // contains obje içinde parantez içinde aradığın şeyi sorgular true false döner
  //yukardıaki kod classların içindeki aranan kelimeyi sorgular

  // BURASI TOGGLE İŞLEVİ GÖREN KODDUR ADD VVE REMOVE KULLANINMINI BURDAN GÖREBİLİRSİN
  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }

  links.classList.toggle("show-links");
});
