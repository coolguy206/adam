"use strict";

/*!
 * Speed Vault Video Gallery
 *
 * @author Hélio Chun - https://www.facebook.com/user128
 * JS code bug fix help by SergioCrisostomo - https://github.com/SergioCrisostomo
 * @version 1.1.0 - Square Base
 * @description Lazy load video gallery for Youtube, Vimeo and DailyMotion videos
 *
 * Inspired by a Stack Overflow question
 */
// use to load video thumbnails and iframes
// check out github repo to include formats not youtube 
$(document).ready(function () {
  var $svThumb = $('.svThumb'); // #region test body overlay:
  // $('.wrapper').prepend('<div id="svBox"></div>');
  // $('#svBox').prepend('<div class="svPlayer">');
  // #endregion

  $('#svList').wrapAll('<div id="svBox"></div>');
  $('#svBox').prepend('<div class="svPlayer">'); // // $('#svBox').prepend('<div class="svPlayer">\
  // // <div class="infoBox">\
  // // <div class="nowPlaying"><h3 class="svTitle svTitleFix">Select a video from the gallery.</h3></div>\
  // // </div>\
  // //</div>');

  $svThumb.wrapInner('<div class="sv-text"></div>');
  $svThumb.prepend('<span class="sv-overlay"></span>');
  $(".sv-text").each(function () {
    var $numWords = $(this).text().length;

    if ($numWords >= 35 && $numWords < 45) {
      $(this).css("font-size", "15px");
    } else if ($numWords >= 46) {
      $(this).css("font-size", "14px");
    }
  });
});
$(document).ready(function () {
  // Youtube Video
  $('.ytVideo').each(function () {
    var $videoID = $(this).attr('data-videoID'),
        // $txt = $(this).text(),
    $ytVideo = $('<div class="meuVideo"> <iframe width="560" height="315" src="https://www.youtube.com/embed/' + $videoID + '?showinfo=1&autoplay=1" frameborder="0" allowfullscreen></iframe> </div>'),
        $ytThumb = $('<img src="https://img.youtube.com/vi/' + $videoID + '/mqdefault.jpg" data-anchor="svBox"/>');
    $(this).prepend($ytThumb);
    $(this).click(function () {
      // $('.meuVideo, .nowPlaying').remove();
      $('.meuVideo').remove();
      $('.svPlayer').prepend($ytVideo).hide().slideDown("fast"); // $('.infoBox').prepend('<div class="nowPlaying"><h3 class="svTitle">' + $txt + '</h3></div>');

      return false;
    });
  });
}); // click on thumbnail to enlarge

$(document).ready(function () {
  $('.svThumb').click(function () {
    // var $thumbPath2 = $('.svThumb img').attr("data-anchor"),
    //   $thumbAnchor2 = $("#" + $thumbPath2),
    //   $leftAbsolute2 = $(".html,body");
    // var $thumbPosition2 = $thumbAnchor2.offset().top + (-40)
    // console.log($thumbPosition2);
    // $leftAbsolute2.animate({ scrollTop: $thumbPosition2 });
    // mine:
    // $('.wrapper').prepend('<div id="svBox"></div>');
    // $('#svBox').prepend('<div class="svPlayer">');
    // $('.closeUiBtn').remove();
    $('.svPlayer').addClass('svPlayer_active');
    $('#svBox').prepend('<div class="closeUiBtn">Close</div>');
    console.log('clicked'); // return false;
  }); // click btn close video

  $(document).on('click', '.closeUiBtn', function () {
    // //$('.meuVideo, .nowPlaying, .closeUiBtn').remove();
    // $('.meuVideo, .closeUiBtn').remove();
    $('.svPlayer_active, .closeUiBtn').remove();
    $('#svBox').prepend('<div class="svPlayer">'); // $('#svBox').remove();

    return false;
  });
}); // $(document).ready(function () {
//   function checkWidth() {
//     // var $svBoxParent = $("#svBox").parent().width(),
//     var wrapper = $(".wrapper").width(),
//       $svBox = $("#svBox");
//     if (wrapper >= 900) {
//       $svBox.removeClass();
//       $svBox.addClass('mQuery900');
//       console.log("900mQuery");
//     } else if (wrapper >= 700) {
//       $svBox.removeClass();
//       $svBox.addClass('mQuery700');
//       console.log("700mQuery");
//     } else if (wrapper <= 550) {
//       $svBox.removeClass();
//       $svBox.addClass('mQuery550');
//       console.log("550mQuery");
//     }
//   }
//   // Execute on load
//   // checkWidth();
//   // Bind event listener
//   // $(window).resize(checkWidth);
// });
