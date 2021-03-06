
window.addEventListener("DOMContentLoaded", (event) => {

  let $ = (e) => document.querySelector(e);

// Dots
// ====
let dots = $(".dots");

// Function
// ========
function animate(element, className) {
  element.classList.add(className);
  setTimeout(() => {
    element.classList.remove(className);
    setTimeout(() => {
      animate(element, className);
    }, 500);
  }, 2500);
}

// Execution
// =========
animate(dots, "dots--animate");

// Professional Abubaker ;P
// =====================
const twitter = $(".abs-twitter");
window.addEventListener(
  "mousemove",
  () => twitter.classList.add("abs-twitter--show"),
  { once: true }
);
    // Navbar shrink function
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector(".navbar");
      console.log(navbarCollapsible);
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };
  
    // Shrink the navbar
    navbarShrink();
  
    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);
  
    // Activate Bootstrap scrollspy on the main nav element
    // const navbar = document.body.querySelector(".navbar");
    // if (navbar) {
    //   new bootstrap.ScrollSpy(document.body, {
    //     target: ".navbar",
    //     offset: 74
    //   });
    // }
});

