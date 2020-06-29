'use strict';

(function () {
  var MOUSE_LEFT_BUTTON = 0;
  var Key = {
    ESC: 'Escape'
  };

  var textTruncate = function (str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }

    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };

  var isEscEvent = function (evt, action) {
    if (evt.key === Key.ESC) {
      action();
    }
  };

  var clearMessage = function () {
    var messageElement = document.querySelector('.error-message');
    if (messageElement) {
      messageElement.remove();
    }
  };

  window.util = {
    textTruncate: textTruncate,
    MOUSE_LEFT_BUTTON: MOUSE_LEFT_BUTTON,
    isEscEvent: isEscEvent,
    clearMessage: clearMessage
  };
})();
