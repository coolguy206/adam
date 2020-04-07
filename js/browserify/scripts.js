(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.banner = banner;

function banner() {
  $('.banner_slick').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'>\n        <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 501.5 501.5'>\n          <g>\n            <path fill='red'\n              d='M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z' />\n          </g>\n        </svg>\n      </button>",
    nextArrow: "<button type='button' class='slick-next pull-right'>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 501.5 501.5\">\n          <g>\n            <path fill=\"red\"\n              d=\"M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z\" />\n          </g>\n        </svg>\n      </button>"
  });
}

;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyright = copyright;

function copyright() {
  var date = new Date();
  document.getElementById("copyright").textContent = date.getFullYear();
}

;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gallery = gallery;

function gallery() {
  // $('.gallery_thumbnails ul').slick({
  $('.gallery_thumbnails ul').slick({
    slidesToShow: 5,
    arrows: true,
    autoplay: true,
    infinite: true,
    dots: true,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 415,
      settings: {
        slidesToShow: 1
      }
    }],
    prevArrow: "<button type='button' class='slick-prev pull-left'>\n        <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 501.5 501.5'>\n          <g>\n            <path fill='red'\n              d='M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z' />\n          </g>\n        </svg>\n      </button>",
    nextArrow: "<button type='button' class='slick-next pull-right'>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 501.5 501.5\">\n          <g>\n            <path fill=\"red\"\n              d=\"M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z\" />\n          </g>\n        </svg>\n      </button>"
  });
}

;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightbox = lightbox;

function lightbox() {
  $(document).on('click', '[data-lightbox]', lity);
}

;

},{}],5:[function(require,module,exports){
"use strict";

var _banner = require("./banner.js");

var _copyright = require("./copyright.js");

var _gallery = require("./gallery.js");

var _lightbox = require("./lightbox.js");

var _toggleHamburger = require("./toggleHamburger.js");

$(document).ready(function () {
  (0, _banner.banner)();
  (0, _gallery.gallery)();
  (0, _lightbox.lightbox)();
  (0, _toggleHamburger.toggle)();
  (0, _copyright.copyright)();
});

},{"./banner.js":1,"./copyright.js":2,"./gallery.js":3,"./lightbox.js":4,"./toggleHamburger.js":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggle = toggle;

function toggle() {
  var toggleHamburger = function toggleHamburger() {
    var div = $('#nav_id div'); // console.log(div);

    if (div[0].className == "active") {
      div[0].className = "";
    } else {
      div[0].className = "active";
    }
  };

  $("#hamburger_icon, #hamburger_close, #hamburger_close ~ a").on('click', function () {
    toggleHamburger();
  });
}

;

},{}]},{},[5]);
