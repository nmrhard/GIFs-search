'use strict';

(function () {
  var buttonSearchElement = document.querySelector('.search-form__submit');

  var showMessage = function(message) {
    var photosContainer = document.querySelector('.photos');

    var messageElement = document.createElement('p');
    messageElement.innerText = message;
    messageElement.classList.add('error-message');

    photosContainer.prepend(messageElement);
  };

  var onDataSearch = function (dataPhotos) {
    if (dataPhotos.data.length > 0) {
      window.init.setImages(dataPhotos.data);
      var images = window.init.getImages()
      window.debounce(window.photo.renderPhotos(images.slice(0, 8)));
    } else {
      showMessage('One or more images were not found');
    }
  };

  var searchImages = function(evt) {
    evt.preventDefault();
    var textQuery = document.querySelector('.search-form__input').value;

    window.util.clearMessage();
    window.photo.clearImages();
    window.backend.load(onDataSearch, textQuery);
  };

  buttonSearchElement.addEventListener('click', searchImages);

})();
