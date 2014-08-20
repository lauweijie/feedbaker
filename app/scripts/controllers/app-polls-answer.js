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
        $scope.submitAnswer();
      };
      $scope.submitAnswer = function() {
        $scope.displayUndoError = false;
        $scope.displayUndoSuccess = false;
        if($scope.selectedAnswer !== undefined) {
          $scope.submittingAnswer = true;
          PollAnswer.set({
            'id': poll._id,
            'answer': $scope.selectedAnswer
          }, function(pollAnswer) {
            $scope.submittingAnswer = false;
            $scope.questionAnswered = true;
            $scope.displaySuccess = true;
            $scope.selectedAnswer = pollAnswer.answer;
          }, function() {
            $scope.displayError = true;
          });
        }
      };
      $scope.undo = function() {
        $scope.displayUndoError = false;
        $scope.displaySuccess = false;
        $scope.submittingUndo = true;
        PollAnswer.delete({
          'id': poll._id
        }, function(pollAnswer) {
          $scope.submittingUndo = false;
          $scope.questionAnswered = false;
          $scope.displayUndoSuccess = true;
          $scope.selectedAnswer = undefined;
        }, function() {
          $scope.submittingUndo = false;
          $scope.displayUndoError = true;
        });
      };
    }, function() {
      $location.path('/app/polls');
    });
  });
