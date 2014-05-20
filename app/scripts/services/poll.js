'use strict';

angular.module('feedbakerApp')
  .factory('Poll', function ($resource) {
    return $resource('/api/polls/:id', {
      id: '@id'
    }, { //parameters default
      create: {
        method: 'POST',
        params: {}
      },
      list: {
        method: 'GET',
        isArray: true,
        params: {}
      },
      get: {
        method: 'GET'
      },
      update: {
        method: 'PUT'
      }
	  });
  });
