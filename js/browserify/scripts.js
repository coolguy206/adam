(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
// #region navbar sticky
// sticky the horizontal navbar to the top after scroll to its div


window.onscroll = function () {
  fixedToTop();
};

var navLinks = document.getElementById("header"); // let navLinksSticky = navLinks.offsetTop;
// navbar sticks to top on scroll

function fixedToTop() {
  // if (window.pageYOffset > navLinksSticky) {
  if (window.pageYOffset > 1) {
    navLinks.classList.add("header_sticky");
  } else {
    navLinks.classList.remove("header_sticky");
  }
} // #endregion

},{}]},{},[1]);
