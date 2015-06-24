'use strict';

(function() {

  var createFieldset = document.getElementById('create-account-form');
  createFieldset.setAttribute('class', 'hidden');

  var showCreate = function(e) {
    if (!e) {
      e = window.event;
    }

    createFieldset.setAttribute('class', 'fadeIn');

    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
  }

  var createAccount = document.getElementById('create');
  createAccount.addEventListener('click', function(e) {
    showCreate(e);
  }, false);

})();

//the 'e' is the event object.  Everything is an object.//
