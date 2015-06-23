// Luke's Exciting jQuery

var url = window.location.href;
var $links = $("#nav-menu a");

$(function(){
  $($links).each(function(){
    if ($(this).prop("href") === url){
      $(this).parent().addClass("nav-link-active");
    }
  });
});

// Luke's Exciting jQuery (Alternate)

// $(function(){
//   $($links).each(function(){
//     if (url.indexOf($(this).prop("href")) >= 0){
//       $(this).parent().addClass("nav-link-active");
//     }
//   });
// });


// Philip's Boring Javascript

// 'use strict';

// (function() {

//   var currentNav = function() {
//     var navLinks = document.getElementById('nav-menu').getElementsByTagName('a');

//     // console.log(navLinks);
//     // used this to understand what I was doing better

//     for(var i = 0; i < navLinks.length; i++) {
//       if(document.location.href.indexOf(navLinks[i].href) >= 0) {
//         return navLinks[i].parentNode.className='nav-link-active';
//       }
//     }
//   }

//   currentNav();

// })();


