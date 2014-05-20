'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsNewCtrl', function ($scope) {
    $scope.poll = {
      question: '',
      type: 1,
      choices: {}
    };
    $scope.numChoicesMin = 2;
    $scope.numChoicesMax = 8;
    $scope.numChoices = $scope.numChoicesMin;
    $scope.getNumber = function(num) {
      if(num === null) {
        num = 2;
      }
      if(isNaN(num) || num < $scope.numChoicesMin || num > $scope.numChoicesMax) {
        $scope.numChoices = 2;
        num = 2;
      }
      if(parseInt(num) != num) {
        $scope.numChoices = parseInt(num);
      }
      angular.forEach($scope.poll.choices, function(value, key) {
        if(key >= $scope.numChoices) {
          $scope.poll.choices[key] = undefined;
        }
      });
      return new Array(parseInt(num));
    };
  });
