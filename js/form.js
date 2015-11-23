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

  var radioBtns = document.getElementsByName('review-mark');
  var radioBtnsLength = radioBtns.length;
  var textarea = document.getElementById('review-text');
  var name = document.getElementById('review-name');
  var checkedValue = radioBtns.value;
  var reviewFieldsText = document.querySelector('.review-fields-text');
  var reviewFieldsName = document.querySelector('.review-fields-name');
  var reviewFields = document.querySelector('.review-fields');
  var submitButton = document.querySelector('.review-submit');

  function validation() {
    if (checkedValue < 3) {
      textarea.required = true;
      reviewFieldsText.style.display = 'inline-block';
    } else {
      textarea.required = false;
      reviewFieldsText.style.display = 'none';
    }

    if (name.value !== '') {
      reviewFieldsName.style.display = 'none';

      if (checkedValue < 3 && textarea.value !== '' || checkedValue >= 3) {
        reviewFields.style.display = 'none';
        submitButton.removeAttribute('disabled');
      } else {
        reviewFields.style.display = 'inline-block';
        submitButton.setAttribute('disabled', 'disabled');
      }
    } else {
      reviewFieldsName.style.display = 'inline-block';
      reviewFields.style.display = 'inline-block';
      submitButton.setAttribute('disabled', 'disabled');
    }
  }

  for (var j = 0; j < radioBtnsLength; j++) {
    radioBtns[j].onchange = function() {
      if (this.value !== checkedValue) {
        checkedValue = this.value;
        validation();
      }
    };
  }

  name.onchange = function() {
    validation();
  };

  textarea.onchange = function() {
    validation();
  };
  
})();
