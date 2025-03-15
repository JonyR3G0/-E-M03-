const heroPowerButton = document.getElementById("HEROPOWER");
const heroSection = document.querySelector(".hero");

function easy() {
  console.log("Clicked");
  heroPowerButton.classList.replace("HEROPOWER", "invisible");
  //heroSection.classList.replace('hero', 'navBar')
}
function HeroKiller() {
  if (window.scrollY > 90) {
    heroSection.classList.replace("hero", "navBar");
  }
}

heroPowerButton.addEventListener("click", easy);
window.addEventListener("scroll", HeroKiller);
