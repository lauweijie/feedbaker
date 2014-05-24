'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsResultsCtrl', function ($scope, $location, $routeParams, Poll) {
    Poll.getResults({'id': $routeParams.id}, function(poll) {
      $scope.poll = poll;
    }, function() {
      $location.path('/app/polls');
    });
  });
