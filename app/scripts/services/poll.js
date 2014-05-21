'use strict';

angular.module('feedbakerApp')
  .factory('Poll', function ($resource) {
    return $resource('/api/polls/:id', {
      id: '@id'
    }, {
      create: {
        method: 'POST'
      },
      list: {
        method: 'GET',
        isArray: true
      },
      get: {
        method: 'GET'
      },
      update: {
        method: 'PUT'
      }
	  });
  });
