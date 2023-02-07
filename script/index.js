function myFunction(menuButton, nav) {
    menuButton.classList.toggle("change");
    nav.classList.toggle("show");
  }

  function closeNav() {
    const menuButton = document.getElementById("menuButton");
    const nav = document.getElementById("myNavbar");

    if (menuButton.classList.contains("change") && nav.classList.contains("show")) {
        menuButton.classList.remove("change");
        nav.classList.remove("show");
    }
  }

// If the user click dosen't match the menu button, close navigation and change menu
document.addEventListener("click", event => {
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

  const arrOfQuotes = 
  [
    `"For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life."`,
    `"Trust in the Lord with all your heart, and do not lean on your own understanding."`,
    `"Let your light shine before others, so that they may see your good works and give glory to your Father in heaven."`,
    `"Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God."`,
    `"Blessed are the poor in spirit, for theirs is the kingdom of heaven."`,
    `“Love the Lord your God with all your heart and with all your soul and with all your mind. And Love your neighbor as yourself.”`,
    `"Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you."`,
    `"I can do all things through Christ who strengthens me."`,
    `"The Lord is my shepherd, I shall not want."`,
    `"For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart."`
  ]

  const verses =
  [
    "- John 3:16",
    "- Proverbs 3:5",
    "- Matthew 5:16",
    "- Philippians 4:6",
    "- Matthew 5:3",
    "- Matthew 22:37-39",
    "- Matthew 7:7",
    "- Philippians 4:13",
    "- Psalm 23:1",
    "- Hebrews 4:12"
  ]

  function quoteRandomizer() {
    const randomNumber = Math.floor(Math.random() * 11);
    document.getElementById("quotes").innerHTML = arrOfQuotes[randomNumber];
    document.getElementById("verse").innerHTML = verses[randomNumber];
  }

  quoteRandomizer();
