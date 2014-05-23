'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsAnswerCtrl', function ($scope, $location, $routeParams, Poll, PollAnswer) {
    Poll.get({'id': $routeParams.id}, function(poll) {
      $scope.poll = poll;
    }, function() {
      $location.path('/app/polls');
    });
    PollAnswer.get({'id': $routeParams.id}, function(pollAnswer) {
      if(pollAnswer.answer !== undefined) {
        $scope.pollAnswer = pollAnswer;
        $scope.questionAnswered = true;
        $scope.selectedAnswer = pollAnswer.answer;
      }
    });
    $scope.selectAnswer = function(answer) {
      if($scope.questionAnswered) {
        return;
      }
      $scope.selectedAnswer = answer;
    };
    $scope.submitAnswer = function() {
      if($scope.selectedAnswer !== undefined) {
        $scope.submittingForm = true;
        PollAnswer.set({
          'id': $routeParams.id,
          'answer': $scope.selectedAnswer
        }, function(pollAnswer) {
          $scope.questionAnswered = true;
          $scope.selectedAnswer = pollAnswer.answer;
          $scope.displaySuccess = true;
        }, function() {
          $scope.displayError = true;
        });
      }
    };
  });
