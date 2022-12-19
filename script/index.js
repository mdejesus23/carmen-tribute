/* toggle menu button */
function myFunction(myNav) {
    if (myNav.style.display === "none") {
        myNav.style.display = "flex";
    } else {
        myNav.style.display = "none";
    }
}

/* switch to origial design when resizing */
window.addEventListener("resize", function(){
let winWidth = window.innerWidth;
    if (winWidth >= 580 ) {
        document.getElementById("myNavbar").style.display = "flex";
    } else {
        document.getElementById("myNavbar").style.display = "none";
    }
  });

  /* switch to close navbar */
  function closeNav() {
    if (window.innerWidth >= 580 ) {
        document.getElementById("myNavbar").style.display = "flex";
    } else {
        document.getElementById("myNavbar").style.display = "none";
    }
  }