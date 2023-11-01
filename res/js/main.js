const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoclickUpgrade = document.getElementById("autoclickUpgrade");
const zakazaneHouby = document.getElementById("zkzn")

let numberOfCookies = 0;
let cookieIncreaseNumber = 1;
let autoClickerIncrease = 0;
let autoclickerinterval;
let clickupgradeprice = 50;
let autoClickerPrice = 100;
let zkznHoubyPrice = 10000;
//.onclick - na kliknuti
//() => arrow funkce
//{} - scope
cookie.onclick = () => {
    //Zvednout cislo o 1
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    //++ - inkrement
    numberOfCookies += cookieIncreaseNumber;
    //Zobrazit v odstavci
    counter.innerText = "Houbičky: " + numberOfCookies ;
};

clickUpgrade.onclick = () => {
    if (numberOfCookies >= clickupgradeprice) {
      numberOfCookies -= clickupgradeprice;
      clickupgradeprice *= 2
      clickUpgrade.innerHTML = " Buy click upgrade: " + clickupgradeprice;
      counter.innerText = "Houbičky: " + numberOfCookies;
      cookieIncreaseNumber++;
    }
  };
  
autoclickUpgrade.onclick = () => {
    if (numberOfCookies >= autoClickerPrice) {
      numberOfCookies -= autoClickerPrice;
      autoClickerPrice *= 2
      autoclickUpgrade.innerHTML = "Buy autoclicker: " + autoClickerPrice;
      counter.innerText = "Houbičky: " + numberOfCookies;
      autoClickerIncrease++;
      clearInterval(autoclickerinterval);
      autoclickerinterval = setInterval(() => {
        numberOfCookies += autoClickerIncrease;
        counter.innerText = "Houbičky: " + numberOfCookies;
    }, 1000);

  }
};
 function hideButton(x){
    x.style.display = "none";
};

function changeImage(file_name) {
    let img = document.querySelector("#cookie")
    img.setAttribute('src', file_name)
};


//function onclick = () => {
   // if (numberOfCookies >= zkznHoubyPrice) {
   //     numberOfCookies -= zkznHoubyPrice;
   //     counter.innerText = "Houbičky: " + numberOfCookies;
   // }
//};
