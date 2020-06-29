'use strict';

(function () {
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_IN_MS = 10000;
  var API_KEY = 'O3iJIz4KNHqyrwfM88y7Abn9WA2607z0';
  var NUMBER_OF_OBJECTS = 8;
  var MAX_OFFSET = 50;

  var eventConnection = function(xhr, onLoad, onError) {
    xhr.addEventListener('load', function() {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + ' мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;
  };

  var onError = function (errorMessage) {
    document.body.style = 'position: relative';
    var node = document.createElement('div');
    var spanElement = document.createElement('span');
    node.style = 'z-index: 100; display: flex; padding-top: 280px; color: #ffffff; background-color: rgba(0,0,0,0.5);';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.top = 0;
    node.style.width = '100%';
    node.style.height = '100%';
    node.style.fontSize = '50px';

    spanElement.style = 'margin: 0 auto; color: #00000';
    spanElement.textContent = errorMessage;
    node.appendChild(spanElement);
    document.body.insertAdjacentElement('afterbegin', node);
};


  var load = function(onLoad, searchQuery) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    eventConnection(xhr, onLoad, onError);

    var offset = Math.floor(Math.random() * MAX_OFFSET);
    var URL = 'http://api.giphy.com/v1/gifs/search?q=' + searchQuery + '&api_key=' + API_KEY + '&offset=' + offset;


    xhr.open('GET', URL);
    xhr.send();
  };

  window.backend = {
    load: load
  };
})();
