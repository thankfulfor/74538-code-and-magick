'use strict';
/* global reviews: true */
(function() {
  var container = document.querySelector('.reviews-list');
  var template = document.querySelector('#review-template');
  var filter = document.querySelector('.reviews-filter');

  filter.classList.add('invisible');

  // 1. Перебрать все элементы в структуре данных
  reviews.forEach(function(item) {
    var element = getElementFromTemplate(item);
    container.appendChild(element);
  });

  // 2. для каждого элемента создать DOM-элемент на основе шаблона
  function getElementFromTemplate(item) {
    var avatar = new Image();
    if ('content' in template) {
      var element = template.content.children[0].cloneNode(true);
    } else {
      element = template.children[0].cloneNode(true);
    }

    var oldAvatar = element.querySelector('.review-author');
    var ratingBlock = element.querySelector('.review-rating');
    var ratingStar = item.rating;
    var ratingStarString = null;

    // проверяем рейтинги
    switch (ratingStar) {
      case 2:
        ratingStarString = 'two';
        break;

      case 3:
        ratingStarString = 'three';
        break;

      case 4:
        ratingStarString = 'four';
        break;

      case 5:
        ratingStarString = 'five';
        break;
    }

    ratingBlock.classList.add('review-rating-' + ratingStarString);

    element.querySelector('.review-text').textContent = item.description;

    avatar.onload = function() {
      avatar.width = '124';
      avatar.height = '124';
      element.replaceChild(avatar, oldAvatar);
      filter.classList.remove('invisible');
    };

    // Обработчик ошибки
    avatar.onerror = function() {
      element.classList.add('review-load-failure');
    };

    avatar.classList.add('review-author');
    avatar.alt = item.author.name;
    avatar.title = item.author.name;
    avatar.src = item.author.picture;

    return element;
  }

})();
