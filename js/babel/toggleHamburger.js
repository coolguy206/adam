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
