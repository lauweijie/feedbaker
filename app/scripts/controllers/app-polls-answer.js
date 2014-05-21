'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsAnswerCtrl', function ($scope, $location, $routeParams, Poll) {
    Poll.get({"id": $routeParams.poll_id}, function(poll) {
      $scope.poll = poll;
    });
  });
