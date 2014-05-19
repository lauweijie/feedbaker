'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsNewCtrl', function ($scope) {
    $scope.poll = {
      question: '',
      type: 1,
      choices: {}
    };
    $scope.numChoices = 2;
    $scope.getNumber = function(num) {
      if(isNaN(num) || num === null) {
        $scope.numChoices = 2;
      }
      angular.forEach($scope.poll.choices, function(value, key) {
        if(key >= $scope.numChoices) {
          $scope.poll.choices[key] = undefined;
        }
      });
      return new Array(num);
    };
  });
