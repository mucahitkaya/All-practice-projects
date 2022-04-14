//Kullanıcı bilgileri.
const userData = [
  {
    iban: "trxx yyyy xxxx yyyy",
    balance: 100,
  },
  {
    iban: "trxx yyyy xxxx yyyx",
    balance: 5040,
  },
  {
    iban: "trxx yyyy xxxx xyyx",
    balance: 10594,
  },
];
const user = {
  name: "Jane",
  surname: "Doe",
  userData,
};

//Geri sayım fonksiyonu
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  //Her bir saniyede ekrana zamanı yansıtan ve saniyeyi 1 azaltan fonks.
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      location.reload();
      alert("Oturumunuz sonlanmıştır!");
    }
  }, 1000);
}

//Sayfa tekrar yüklendiğinde zamanı sıfırlayıp çağıran fonks.
window.onload = function () {
  var twoMinutes = 60 * 2,
    display = document.querySelector("#time");
  startTimer(twoMinutes, display);
};

//Hesap ve gönderilecek ibanı seçmeden açılmayan gönderilmek istenen değer
//bakiyesinden büyükse uyarı veren küçükse gönder butonu aktif eden fonks.
function sendingConditions() {
  const ibanInputValue = document.getElementById("iban-input").value;
  const selectedIban = document.getElementById("accounts").value;
  const amountOfMoney = document.getElementById("money").value;
  const sent = document.getElementById("money-gonder");
  const ibanBalance = userData.find((account) => account.iban == selectedIban);

  if (selectedIban != "" && ibanInputValue != "") {
    if (amountOfMoney != "" && amountOfMoney > ibanBalance.balance) {
      alert("Maalesef Bakiye Yetersiz!");
      sent.style.display = "none";
      location.reload();
    } else if (amountOfMoney != "" && amountOfMoney <= ibanBalance.balance) {
      sent.style.display = "block";
    }
  }
}

//500 altı değerler için olumlu dönüt veren üstü değerler için şifre soran fonks.
function sendingFuntion() {
  const money = document.getElementById("money").value;

  if (money != "" && money <= 500) {
    alert("İşlem Başarılı");
    location.reload();
  } else if (money != "" && money > 500) {
    //Şifreyi doğru cevaplama durumuna göre tekrar soruyoruz
    for (let q = 0; q < 3; q++) {
      const inputPassword = prompt(
        "Lutfen Telefonunuza gelen Şifreyi Giriniz",
        "Buraya yazınız lütfen"
      );
      //şifre doğruysa
      if (inputPassword == "1234") {
        alert("Şifre Başarılı. Gönderme İşlemi Tamamlandı");
        location.reload();

        break;
      } else alert("Şifre Doğru Değil!");
      //şifre yanlışsa yukarısı
      //3 defa yanlış girdiyse
      if (q == 2) {
        alert("Noldu ya foton gitti");
        location.reload();
      }
    }
  }
}
