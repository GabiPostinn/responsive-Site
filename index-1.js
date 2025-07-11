const logoNav = document.getElementById("logoNav");
logoNav.src = "./images/logo.svg";

const homeButton = document.getElementById("homeBtn");
homeButton.textContent = "HOME";
homeButton.href = "index-1.html";

const destinationButton = document.getElementById("destBtn");
destinationButton.textContent = "DESTINATION";
destinationButton.href = "index-2.html";

const crewButton = document.getElementById("crewBtn");
crewButton.textContent = "CREW";

const technologyButton = document.getElementById("techBtn");
technologyButton.textContent = "TECHNOLOGY";

const containerLeftH2 = document.getElementById("containerL-h2");
containerLeftH2.textContent = "SO, YOU WANT TO TRAVEL TO";

const containerLeftH1 = document.getElementById("containerL-h1");
containerLeftH1.textContent = "SPACE";

const containerLeftP = document.getElementById("containerL-p");
containerLeftP.textContent = "Let’s face it; if you want to go to space, you might as well\n genuinely go to outer space and not hover kind of on the\n edge of it. Well sit back, and relax because we’ll give you a\n truly out of this world experience!";

const exploreButton = document.getElementById("exploreButton");

exploreButton.src = "./images/Group.png";

exploreButton.addEventListener("click", () => {
  window.location.href = "index-2.html";
});
