'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsAnswerCtrl', function ($scope, $location, $routeParams, Poll, PollAnswer) {
    Poll.getByShortId({'shortid': $routeParams.shortid}, function(poll) {
      $scope.poll = poll;
      PollAnswer.get({'id': poll._id}, function(pollAnswer) {
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
            'id': poll._id,
            'answer': $scope.selectedAnswer
          }, function(pollAnswer) {
            $scope.questionAnswered = true;
            $scope.selectedAnswer = pollAnswer.answer;
            $scope.displaySuccess = true;
            $scope.displayUndoSuccess = false;
          }, function() {
            $scope.displayError = true;
          });
        }
      };
      $scope.undo = function() {
        $scope.displaySuccess = false;
        $scope.submittingForm = true;
        PollAnswer.delete({
          'id': poll._id
        }, function(pollAnswer) {
          $scope.questionAnswered = false;
          $scope.displayUndoSuccess = true;
          $scope.selectedAnswer = undefined;
        }, function() {
          $scope.displayUndoError = true;
        });
      };
    }, function() {
      $location.path('/app/polls');
    });
  });
