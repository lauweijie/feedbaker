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
      if(isNaN(num)) {
        $scope.numChoices = 2;
      }
      if(num === null) {
        num = 2;
      }
      angular.forEach($scope.poll.choices, function(value, key) {
        if(key >= $scope.numChoices) {
          $scope.poll.choices[key] = undefined;
        }
      });
      return new Array(num);
    };
  });
