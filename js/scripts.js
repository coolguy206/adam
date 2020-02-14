// #region lory.js slideshow
document.addEventListener('DOMContentLoaded', function () {
  var simple = document.querySelector('.js_slider');

  lory(simple, {
    infinite: 1
  });
});
// #endregion

// #region hamburger menu
function toggleHamburger() {
  var x = document.getElementById("nav_id");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
// #endregion

// #region navbar sticky
// sticky the horizontal navbar to the top after scroll to its div
window.onscroll = function () { fixedToTop() };
const navLinks = document.getElementById("header");
// let navLinksSticky = navLinks.offsetTop;

// navbar sticks to top on scroll
function fixedToTop() {
  // if (window.pageYOffset > navLinksSticky) {
  if (window.pageYOffset > 1) {
    navLinks.classList.add("header_sticky");
  } else {
    navLinks.classList.remove("header_sticky");
  }
}
// #endregion