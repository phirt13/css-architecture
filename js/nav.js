'use strict';

(function() {

  var currentNav = function() {
    var navLinks = document.getElementById('nav-menu').getElementsByTagName('a');

    // console.log(navLinks);
    // used this to understand what I was doing better

    for(var i = 0; i < navLinks.length; i++) {
      if(document.location.href.indexOf(navLinks[i].href) >= 0) {
        return navLinks[i].parentNode.className='nav-link-active';
      }
    }
  }

  currentNav();

})();


