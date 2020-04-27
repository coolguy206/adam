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

},{}]},{},[1]);
