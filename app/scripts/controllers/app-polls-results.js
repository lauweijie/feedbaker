'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsResultsCtrl', function ($scope, $location, $routeParams, Poll) {
    Poll.getResults({'id': $routeParams.id}, function(res) {
      $scope.poll = res.poll;
      $scope.answerCount = [];
      for(var i = 0; i < res.answerCount.length; i++) {
        $scope.answerCount[res.answerCount[i]._id] = res.answerCount[i].count;
      }
      $scope.chartData = [['Choice', 'Number of Answers']];
      for(var i = 0; i < res.poll.choices.length; i++) {
        $scope.chartData[i+1] = [res.poll.choices[i], $scope.answerCount[i] || 0];
      }      
      $scope.chartObject = {
        'type': 'PieChart',
        'data': $scope.chartData,
        'options': {
          'legend': 'none'
        }
      }
    }, function() {
      $location.path('/app/polls');
    });

  });
