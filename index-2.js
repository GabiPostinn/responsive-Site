const leftTextH1 = document.getElementById("leftTextH1");
leftTextH1.textContent = "01 PICK YOUR DESTINATION";

const planetImage = document.getElementById("planetImage");
planetImage.src = "./images/moon.png";

const moon = document.getElementById("moonSpan");
moon.textContent = "MOON";

const mars = document.getElementById("marsSpan");
mars.textContent = "MARS";

const europa = document.getElementById("europaSpan");
europa.textContent = "EUROPA";

const titan = document.getElementById("titanSpan");
titan.textContent = "TITAN";

const planetName = document.getElementById("planetName");
planetName.textContent = "MOON";

const rightTextP = document.getElementById("rightTextP");
rightTextP.textContent = "See our planet as you’ve never seen it before. A perfect \n relaxing trip away to help regain perspective and come \n back refreshed. While you’re there, take in some history \n by visiting the Luna 2 and Apollo 11 landing sites.";

const distance1p = document.getElementById("distance1p");
distance1p.textContent = "AVG. DISTANCE";

const distance1h2 = document.getElementById("distance1h1");
distance1h1.textContent = "384.400 km";

const distance2p = document.getElementById("distance2p");
distance2p.textContent = "EST. TRAVEL TIME";

const distance2h1 = document.getElementById("distance2h1");
distance2h1.textContent = "3 DAYS";

document.getElementById("moonSpan").addEventListener("click", () => {
  planetName.textContent = "MOON";
  planetImage.src = "./images/moon.png";
  distance1h2.textContent = "384.400 km";
  rightTextP.textContent = "See our planet as you’ve never seen it before. A perfect \n relaxing trip away to help regain perspective and come \n back refreshed. While you’re there, take in some history \n by visiting the Luna 2 and Apollo 11 landing sites.";
  distance2h1.textContent = "3 DAYS";
});

document.getElementById("marsSpan").addEventListener("click", () => {
  planetName.textContent = "MARS";
  planetImage.src = "./images/mars.png";
  distance1h2.textContent = "225 MIL. km";
  rightTextP.textContent = "Don’t forget to pack your hiking boots. You’ll need them to\n tackle Olympus Mons, the tallest planetary mountain in \n our solar system. It’s two and a half times the size of \n Everest!";
  distance2h1.textContent = "9 MONTHS";
});
document.getElementById("europaSpan").addEventListener("click", () => {
  planetName.textContent = "EUROPA";
  planetImage.src = "./images/europa.png";
  distance1h2.textContent = "628 MIL. km";
  rightTextP.textContent = "The smallest of the four Galilean moons orbiting Jupiter, \nEuropa is a winter lover’s dream. With an icy surface, it’s\n perfect for a bit of ice skating, curling, hockey, or simple \nrelaxation in your snug wintery cabin.";
  distance2h1.textContent = "3 YEARS";
});
document.getElementById("titanSpan").addEventListener("click", () => {
  planetName.textContent = "TITAN";
  planetImage.src = "./images/titan.png";
  distance1h2.textContent = "1.6 BIL. km";
  rightTextP.textContent = "The only moon known to have a dense atmosphere other\n than Earth, Titan is a home away from home (just a few \nhundred degrees colder!). As a bonus, you get striking \nviews of the Rings of Saturn.";
  distance2h1.textContent = "7 YEARS";
});
window.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
});
