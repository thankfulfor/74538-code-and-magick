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
  var checkedValue = document.querySelector('input[name = review-mark]:checked').value;
  var submitButton = document.querySelector('.review-submit');
  var reviewFields = document.querySelector('.review-fields');
  var reviewFieldsText = reviewFields.querySelector('.review-fields-text');
  var reviewFieldsName = reviewFields.querySelector('.review-fields-name');
  var today = new Date();
  var currentDate = +Date.now(); // в милисекундах текущее время от 01,01,1970
  var yearToExp = null;

  // месяцы до сентября
  if (today.getMonth() < 8) {
    yearToExp = today.getFullYear() - 1;
  }

  // проверка сентября
  if (today.getMonth() === 8 && today.getDate() > 14) {
    yearToExp = today.getFullYear();
  } else {
    yearToExp = today.getFullYear() - 1;
  }

  // проверка после сентября
  if (today.getMonth() > 8) {
    yearToExp = today.getFullYear();
  }

  var myBirthdayDate = +(new Date(yearToExp, 7, 13));// милисекунды от 01,01,1970 до моего др в году
  var raznitsa = (currentDate * 2) - myBirthdayDate;
  var expireDate = Math.round(raznitsa); // число милисекунд

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

      if (
          checkedValue < 3 && textarea.value !== '' ||
          checkedValue >= 3
      ) {
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
        document.cookie = 'cookiesRating=' + this.value + '; expires=' + (new Date(expireDate).toUTCString());
      }
    };
  }

  validation();

  name.onchange = function() {
    validation();
    document.cookie = 'cookiesName=' + name.value + '; expires=' + (new Date(expireDate).toUTCString());
  };

  textarea.onchange = function() {
    validation();
  };

  name.value = docCookies.getItem('cookiesName');

})();
