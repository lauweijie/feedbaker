'use strict';

angular.module('feedbakerApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
