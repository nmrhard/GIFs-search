'use strict';

(function () {
  var photoListElement = document.querySelector('.photos-list');
  var photoTemplate = document.querySelector('#photo').content.querySelector('.photos-list__item');

  var renderPhoto = function (photo, index) {
    var photoItem = photoTemplate.cloneNode(true);
    var photoElement = photoItem.querySelector('.photos-list__image');
    var descripionElement = photoItem.querySelector('.photo-list__text');
    photoElement.src = photo.images.fixed_height_still.url;
    photoElement.alt = photo.title;
    descripionElement.innerText = window.util.textTruncate(photo.title, 20);

    var resolutionImg = photoItem.querySelector('.photos-list__resolution');
    resolutionImg.innerText = photo.images.original.width + 'x' + photo.images.original.height;
    var linkImg = photoItem.querySelector('.photos-list__link');
    linkImg.href = photo.images.original.mp4;

    photoItem.dataset.index = index;
    photoItem.prepend(photoElement);

    return photoItem;
  };

  var renderPhotos = function (photos) {
    var photoListElement = document.querySelector('.photos-list');
    var fragment = document.createDocumentFragment();

    photos.forEach(function (item, index) {
      fragment.appendChild(renderPhoto(item, index));
    });

    photoListElement.appendChild(fragment);
  };

  var onButtonInfoClick = function (evt) {
    if (evt.button === window.util.MOUSE_LEFT_BUTTON) {
      window.info.showInfo(evt.target);
    }
  };

  var clearImages = function () {
    var imageElements = document.querySelectorAll('.photos-list__item');

    if (imageElements.length > 0) {
      imageElements.forEach(function(item) {
        item.remove();
      });
    }
  }

  photoListElement.addEventListener('click', onButtonInfoClick);


  window.photo = {
    renderPhotos: renderPhotos,
    clearImages: clearImages
  };
})();
