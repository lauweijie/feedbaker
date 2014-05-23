'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsViewCtrl', function ($scope, $location, $routeParams, Poll) {
    Poll.get({'id': $routeParams.id}, function(poll) {
      $scope.poll = poll;
    }, function() {
      $location.path('/app/polls');
    });
    $scope.answerLocation = $location.absUrl() + '/answer';
  });
