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

document.getElementById("moonSpan").addEventListener("click", () => {
  planetName.textContent = "MOON";
  planetImage.src = "./images/moon.png";
});

document.getElementById("marsSpan").addEventListener("click", () => {
  planetName.textContent = "MARS";
  planetImage.src = "./images/mars.png";
});
document.getElementById("europaSpan").addEventListener("click", () => {
  planetName.textContent = "EUROPA";
  planetImage.src = "./images/europa.png";
});
document.getElementById("titanSpan").addEventListener("click", () => {
  planetName.textContent = "TITAN";
  planetImage.src = "./images/titan.png";
});
