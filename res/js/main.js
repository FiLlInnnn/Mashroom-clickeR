const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

let numberOfCookies = 0;
//.onclick - na kliknuti
//() => arrow funkce
//{} - scope
cookie.onclick = () => {
    //Zvednout cislo o 1
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    //++ - inkrement
    numberOfCookies += 1;
    //Zobrazit v odstavci
    counter.innerText = "Houbičky: " + numberOfCookies;
}