!function(){function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}return a}()({1:[function(a,b,c){"use strict";$(document).ready(function(){var a=$(".svThumb");$("#svList").wrapAll('<div id="svBox"></div>'),$("#svBox").prepend('<div class="svPlayer">'),a.wrapInner('<div class="sv-text"></div>'),a.prepend('<span class="sv-overlay"></span>'),$(".sv-text").each(function(){var a=$(this).text().length;a>=35&&a<45?$(this).css("font-size","15px"):a>=46&&$(this).css("font-size","14px")})}),$(document).ready(function(){$(".ytVideo").each(function(){var a=$(this).attr("data-videoID"),b=$('<div class="meuVideo"> <iframe width="560" height="315" src="https://www.youtube.com/embed/'+a+'?showinfo=1&autoplay=1" frameborder="0" allowfullscreen></iframe> </div>'),c=$('<img src="https://img.youtube.com/vi/'+a+'/mqdefault.jpg" data-anchor="svBox"/>');$(this).prepend(c),$(this).click(function(){return $(".meuVideo").remove(),$(".svPlayer").prepend(b).hide().slideDown("fast"),!1})})}),$(document).ready(function(){$(".svThumb").click(function(){$(".svPlayer").addClass("svPlayer_active"),$("#svBox").prepend('<div class="closeUiBtn">Close</div>'),console.log("clicked")}),$(document).on("click",".closeUiBtn",function(){return $(".svPlayer_active, .closeUiBtn").remove(),$("#svBox").prepend('<div class="svPlayer">'),!1})})},{}]},{},[1]);