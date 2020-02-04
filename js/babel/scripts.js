"use strict";

// #region lory.js slideshow
document.addEventListener('DOMContentLoaded', function () {
  var simple = document.querySelector('.js_slider');
  lory(simple, {
    infinite: 1
  });
}); // #endregion
// #region hamburger menu

function toggleHamburger() {
  var x = document.getElementById("nav_id");

  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
} // #endregion
