'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsViewCtrl', function ($scope, $location, $routeParams, Poll) {
    Poll.get({'id': $routeParams.id}, function(poll) {
      $scope.poll = poll;
      $scope.answerLocation = 'http://fbkr.me/' + poll.shortId;
    }, function() {
      $location.path('/app/polls');
    });
  });
