'use strict';

angular.module('feedbakerApp')
  .factory('Poll', function ($resource) {
    return $resource('/api/polls/:id', {
      id: '@id',
      shortid: '@shortid'
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
      getByShortId: {
        method: 'GET',
        url: '/api/polls/:shortid'
      },
      getResults: {
        method: 'GET',
        url: '/api/polls/:id/results'
      },
      update: {
        method: 'PUT'
      }
	  });
  });
