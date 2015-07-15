'use strict';

(function() {

  var eObjectTest = function(e) {
    if (!e) {
      e = window.event;
    }
  };

  eObjectTest();

  var navMenu = document.getElementById('nav-menu');
  var navLinks = navMenu.getElementsByTagName('a');

  var currentNav = function() {
    for(var i = 0; i < navLinks.length; i++) {
      if(document.location.href.indexOf(navLinks[i].href) >= 0) {
        return navLinks[i].parentNode.className='nav-link-active';
      }
    }
  };

  currentNav();

  var winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  console.log(winHeight, winWidth);

  var navArrow = document.getElementById('menu-arrow');
  var navMenuStyle = navMenu.style;

  var changeNav = function(e) {
    if(winWidth <= 480) {
      navMenu.setAttribute('class', 'hidden')
      navArrow.setAttribute('class', 'nav-arrow-up');
    }
  };

  changeNav();

  var showNav = function(e) {
    navMenu.setAttribute('class', '');
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
  };

  navArrow.addEventListener('click', function(e) {
    showNav(e);
  }, false);

})();


