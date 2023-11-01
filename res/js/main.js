const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoclickUpgrade = document.getElementById("autoclickUpgrade");

let numberOfCookies = 0;
let cookieIncreaseNumber = 1;
let autoClickerIncrease = 0;
let autoclickerinterval;
let clickupgradeprice = 50;


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
    counter.innerText = "Houbičky: " + numberOfCookies;
};

clickUpgrade.onclick = () => {
    if (numberOfCookies >= clickupgradeprice) {
      numberOfCookies -= clickupgradeprice;
      clickupgradeprice *= 2
      clickUpgrade.innerHTML = " Buy click upgrade: dolar + clickupgradeprice "
      counter.innerText = "Houbičky: " + numberOfCookies;
      cookieIncreaseNumber++;
    }
  };
  
autoclickUpgrade.onclick = () => {
    if (numberOfCookies >= 100) {
      numberOfCookies -= 100;
      counter.innerText = "Houbičky: " + numberOfCookies;
      autoClickerIncrease++;
      clearInterval(autoclickerinterval);
      autoclickerinterval = setInterval(() => {
        numberOfCookies += autoClickerIncrease;
        counter.innerText = "Houbičky: " + numberOfCookies;
    }, 1000);
  }
};