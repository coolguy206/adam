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
