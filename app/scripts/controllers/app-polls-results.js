'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsResultsCtrl', function ($scope, $location, $routeParams, Poll, socket) {
    $scope.colors = ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00'];
    $scope.toAlpha = function(index) {
      return String.fromCharCode(index + 65);
    };

    $scope.updateAnswerCounts = function(answerCount) {
      $scope.answerCount = [];
      for(var i = 0; i < answerCount.length; i++) {
        $scope.answerCount[answerCount[i]._id] = answerCount[i].count;
      }
      $scope.chartData = [['Choice', 'Responses', { role: 'style' }]];
      for(i = 0; i < $scope.poll.choices.length; i++) {
        $scope.chartData[i+1] = [$scope.toAlpha(i), $scope.answerCount[i] || 0, $scope.colors[i]];
      }
      $scope.chartObject.data = $scope.chartData;
    };

    Poll.getResults({'id': $routeParams.id}, function(res) {
      socket.emit('subscribe', 'results/' + res.poll._id);
      $scope.$on('$destroy', function() {
        socket.emit('unsubscribe', 'results/' + res.poll._id);
      });
      socket.on('update', function (data) {
        $scope.updateAnswerCounts(data.answerCount);
      });
      $scope.poll = res.poll;
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

      $scope.updateAnswerCounts(res.answerCount);
    }, function() {
      $location.path('/app/polls');
    });

  });
