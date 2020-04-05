import { banner } from "./banner.js";
import { copyright } from "./copyright.js";
import { gallery } from "./gallery.js";
import { lightbox } from "./lightbox.js";
import { toggle } from "./toggleHamburger.js";

$(document).ready(function() {

    banner();

    gallery();

    lightbox();

    toggle();

    copyright();

});