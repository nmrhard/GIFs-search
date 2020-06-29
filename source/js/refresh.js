'use strict';

(function () {
  var COUNT_IMAGES = 8;

  var refreshButton = document.querySelector('.refresh-button');

  var checkOverflow = function (start, end) {
    var lastImages = start + COUNT_IMAGES;
    var startImages = start;

    if (lastImages > end) {
      startImages = start - (lastImages - end);
    }

    return startImages;
  }

  var showImages = function () {
    var images = window.init.getImages();
    var countImages =  images.length - 1;
    var startImages = Math.floor(Math.random() * countImages);

    startImages = checkOverflow(startImages, countImages);
    var endImages = startImages + COUNT_IMAGES;

    window.util.clearMessage();
    window.photo.clearImages();
    window.photo.renderPhotos(images.slice(startImages, endImages));
  };

  var updateImages = function () {
    window.debounce(showImages)
  }

  refreshButton.addEventListener('click', updateImages);
})();
