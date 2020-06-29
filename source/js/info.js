'use strict';

(function () {
  var BUTTON_CLASS = 'photo-list__action';

    var showInfo = function (element) {
      closeInfo();
      var isButton = element.className === BUTTON_CLASS;

      if (isButton) {
        var ovelayElement = element.offsetParent.querySelector('.photos-list__overlay');
        ovelayElement.classList.toggle('photos-list__overlay--active');
        document.addEventListener('keydown', onInfoEscapeDown);
      }
    }

    var closeInfo = function () {
      var infoElement = document.querySelector('.photos-list__overlay--active');

      if (infoElement) {
        infoElement.classList.remove('photos-list__overlay--active');
        document.removeEventListener('keydown', onInfoEscapeDown);
      }
    }

    var onInfoEscapeDown = function (evt) {
      window.util.isEscEvent(evt, closeInfo);
    };

    window.info = {
      showInfo: showInfo
    }
})();
