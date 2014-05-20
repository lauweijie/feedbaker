'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsViewCtrl', function ($scope, $location, $routeParams, Poll) {
    Poll.get({"id": $routeParams.poll_id}, function(poll) {
      $scope.poll = poll;
    });
    $scope.answer_location = $location.absUrl() + "/answer";
  });
