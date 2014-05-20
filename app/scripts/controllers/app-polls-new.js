'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsNewCtrl', function ($scope, $location, Poll) {
    $scope.poll = {
      question: '',
      choices: {}
    };
    $scope.submitButtonPressed = false;
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
    $scope.createPoll = function() {
      $scope.submitButtonPressed = true;
      if($scope.newPoll.$valid) {
        Poll.create($scope.poll, function(poll) {
            $location.path('/app/polls/' + poll._id);
        });
      }
    };
  });
