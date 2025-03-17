document.addEventListener('DOMContentLoaded', mainFunction)
function mainFunction()
{
const heroPowerButton = document.getElementById("HEROPOWER");
const heroSection = document.querySelector(".navBar");

const logoString = ['<span class=', '"codeHero"', '>${</span>','project', '<span class=', '"codeHero">','.','</span>','<span class="codeHeroII">','hubIII</span><span class="codeHero">','}','</span>' ];

let strigHTML = '';

stringLogo()

function stringLogo(){
  for (let i = 0; i < logoString.length; i++) {
   heroSection.innerHTML += logoString[i];
  }
}

console.log(strigHTML)

function easy() {
  console.log("Clicked");
  heroPowerButton.classList.replace("HEROPOWER", "invisible");
  //heroSection.classList.replace('hero', 'navBar')
}
function HeroKiller() {
  if (window.pos > 1) {
    heroSection.classList.replace("hero", "navBar");
  }
}

// heroPowerButton.addEventListener("click", easy);
window.addEventListener("scroll", HeroKiller);
}