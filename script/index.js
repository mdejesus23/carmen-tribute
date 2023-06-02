// toggle classname on menubutton and navigation bar.
function myFunction(menuButton, nav) {
  menuButton.classList.toggle("change");
  nav.classList.toggle("show");
}

function closeNav() {
  const menuButton = document.getElementById("menuButton");
  const nav = document.getElementById("myNavbar");

  if (
    menuButton.classList.contains("change") &&
    nav.classList.contains("show")
  ) {
    menuButton.classList.remove("change");
    nav.classList.remove("show");
  }
}

// If the user click dosen't match the menu button, close navigation and change menu
document.addEventListener("click", (event) => {
  if (!event.target.matches(".menu-button")) {
    closeNav();
  }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = [...document.getElementsByClassName("mySlides")];
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// array of bible quotes
const arrOfQuotes = [
  `"All things must pass, only God remains." `,
  `"Let us love God with all our heart, with all our soul, with all our strength and all our mind."`,
  `"The Lord does not delay His promise, as some regard 'delay,' but He is patient with you, not wishing that any should perish but that all should come to repentance." `,
  `"Do small things with great love."`,
  `"He who is obedient will flourish in the land, and he who is pure will be fed from the hand of the king."`,
  `"The most powerful weapon to conquer the devil is humility. For, as he does not know at all how to employ it, neither does he know how to defend himself from it."`,
  `"Prayer is the raising of one's mind and heart to God or the requesting of good things from God."`,
  `"Do not be afraid of anything. You will do marvelous work with the help of God."`,
  `"We must pray without ceasing and work without tiring, for the bread of the future is the seed of today."`,
  `"To one who has faith, no explanation is necessary. To one without faith, no explanation is possible."`,
];

// array of verses of bible quotes
const verses = [
  "- St. Teresa of Avila",
  "- St. Luke",
  "- St. Peter",
  "- St. Therese of Lisieux",
  "- St. John Chrysostom",
  "- St. Vincent de Paul",
  "- St. John Damascene",
  "- St. John Bosco",
  "- St. John Bosco",
  "- St. Thomas Aquinas",
];

// function for quotes randomizer
function quoteRandomizer(arr1, arr2) {
  const randomNumber = Math.floor(Math.random() * 10);
  document.getElementById("quotes").innerHTML = arr1[randomNumber];
  document.getElementById("verse").innerHTML = arr2[randomNumber];
}

quoteRandomizer(arrOfQuotes, verses);

const currentYear = new Date().getFullYear();

const footer = document.getElementById("footer-copyrights");
footer.innerHTML = currentYear;
// try to fixed
