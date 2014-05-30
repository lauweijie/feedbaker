'use strict';

angular.module('feedbakerApp')
  .factory('socket', function (socketFactory) {
    return socketFactory();
  });
