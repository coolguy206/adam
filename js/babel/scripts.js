"use strict";

// #region lory.js slideshow
document.addEventListener('DOMContentLoaded', function () {
  var simple = document.querySelector('.js_slider'); // var multiSlidesVideos = document.querySelector('.js_multislides_videos');
  // var multiSlidesPhotos = document.querySelector('.js_multislides_photos');

  lory(simple, {
    infinite: 1
  }); // lory(multiSlidesVideos, {
  //   infinite: 1,
  //   slidesToScroll: 1
  // });
  // lory(multiSlidesPhotos, {
  //   infinite: 4,
  //   slidesToScroll: 4
  // });
}); // #endregion
// #region slick carousel

$(document).ready(function () {
  $('.gallery_responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'>\n        <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 501.5 501.5'>\n          <g>\n            <path fill='red'\n              d='M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z' />\n          </g>\n        </svg>\n      </button>",
    nextArrow: "<button type='button' class='slick-next pull-right'>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 501.5 501.5\">\n          <g>\n            <path fill=\"red\"\n              d=\"M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z\" />\n          </g>\n        </svg>\n      </button>",
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
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
// #region navbar sticky
// sticky the horizontal navbar to the top after scroll to its div


window.onscroll = function () {
  fixedToTop();
};

var navLinks = document.getElementById("header"); // let navLinksSticky = navLinks.offsetTop;
// navbar sticks to top on scroll

function fixedToTop() {
  if (window.pageYOffset > 1) {
    navLinks.classList.add("header_sticky");
  } else {
    navLinks.classList.remove("header_sticky");
  }
} // #endregion
// get current year


var date = new Date();
document.getElementById("copyright").textContent = date.getFullYear();
