'use strict';

(function() {
  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible');
  };

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.add('invisible');
  };

  var i = 1;
  var max = document.getElementsByName("review-mark").length;

  while (i<=max) {
    if (i<=3) {
      document.getElementById('review-mark-' + i).onclick = function() {
        document.getElementById("review-text").required = true;
        document.querySelector(".review-fields-text").style.display="inline-block";
      };
      document.getElementById("review-name").onkeypress = function() {
        if (!!document.getElementById("review-name").value) {
          document.querySelector(".review-fields-name").style.display="none";
          if (!!document.getElementById("review-text").value) {
            document.querySelector(".review-submit").removeAttribute("disabled");
          }
        };
      };
      document.getElementById("review-text").onkeypress = function() {
        if (!!document.getElementById("review-text").value) {
            document.querySelector(".review-fields-text").style.display="none";
          if (!!document.getElementById("review-name").value) {
            document.querySelector(".review-submit").removeAttribute("disabled");
          };  
        };
      };
    }else{
      document.getElementById('review-mark-' + i).onclick = function() {
        document.getElementById("review-text").required = false;
        document.querySelector(".review-fields-text").style.display="none";
      };
      document.getElementById("review-name").onkeypress = function() {
        if (!!document.getElementById("review-name").value) {
          document.querySelector(".review-submit").removeAttribute("disabled");
        }; 
      };
    };
    i++;   
  };

})();
