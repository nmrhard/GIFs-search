'use strict';

(function () {
    var initImages;
    var images;
    var searchQuery = 'fail';

    var onDataLoaded = function (dataPhotos) {
      initImages = dataPhotos.data;
      images = initImages.slice(0, 8);
      window.photo.renderPhotos(images);
    };

    var getImages = function () {
      return initImages;
    }

    var setImages = function (data) {
      initImages = data.slice();
    }

    window.backend.load(onDataLoaded, searchQuery);

    window.init = {
      getImages: getImages,
      setImages: setImages
    };
})();
