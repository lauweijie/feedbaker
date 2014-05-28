'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsResultsCtrl', function ($scope, $location, $routeParams, Poll) {
    $scope.colors = ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00'];
    $scope.toAlpha = function(index) {
      return String.fromCharCode(index + 65);
    };
    Poll.getResults({'id': $routeParams.id}, function(res) {
      $scope.poll = res.poll;
      $scope.answerCount = [];
      for(var i = 0; i < res.answerCount.length; i++) {
        $scope.answerCount[res.answerCount[i]._id] = res.answerCount[i].count;
      }
      $scope.chartData = [['Choice', 'Responses', { role: 'style' }]];
      for(i = 0; i < res.poll.choices.length; i++) {
        $scope.chartData[i+1] = [$scope.toAlpha(i), $scope.answerCount[i] || 0, $scope.colors[i]];
      }
      $scope.chartObject = {
        'type': 'ColumnChart',
        'data': $scope.chartData,
        'options': {
          'legend': 'none',
          'vAxis': {
            'gridlines': {'count': 0}
          },
          'bar': {
            'groupWidth': '40'
          },
          'chartArea': {
            'width': '90%'
          }
        }
      };
    }, function() {
      $location.path('/app/polls');
    });

  });
