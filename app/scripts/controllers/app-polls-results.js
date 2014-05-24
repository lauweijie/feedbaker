'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsResultsCtrl', function ($scope, $location, $routeParams, Poll) {
    Poll.getResults({'id': $routeParams.id}, function(res) {
      $scope.poll = res.poll;
      $scope.answerCount = [];
      for(var i = 0; i < res.answerCount.length; i++) {
        $scope.answerCount[res.answerCount[i]._id] = res.answerCount[i].count;
      }
    }, function() {
      $location.path('/app/polls');
    });
  });
