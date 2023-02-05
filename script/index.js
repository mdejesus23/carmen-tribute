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

// If the user click dosen't match the menu button close navigation and change menu
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
