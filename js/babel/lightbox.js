"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightbox = lightbox;

function lightbox() {
  $(document).on('click', '[data-lightbox]', lity);
}

;
