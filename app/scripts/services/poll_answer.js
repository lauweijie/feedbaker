'use strict';

angular.module('feedbakerApp')
  .factory('PollAnswer', function ($resource) {
    return $resource('/api/polls/:id/answer', {
      id: '@id'
    }, {
      get: {
        method: 'GET'
      },
      set: {
        method: 'PUT'
      }
	  });
  });
