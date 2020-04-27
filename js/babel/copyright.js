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
