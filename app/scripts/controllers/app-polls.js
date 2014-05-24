'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsCtrl', function ($scope, $location, Poll) {
    Poll.list(function(polls) {
      $scope.polls = polls;
    });
    $scope.view = function(id) {
      $location.path('/app/polls/' + id);
    };
    $scope.results = function(id) {
      $location.path('/app/polls/' + id + '/results');
    };
    $scope.activate = function(poll) {
      poll.activeUpdating = true;
      Poll.update({'id': poll._id}, {'active' : true}, function(newPoll) {
        poll.activeUpdating = false;
        if(newPoll.active !== undefined) {
          poll.active = newPoll.active;
        }
      }, function() {
        poll.activeUpdating = false;
      });
    };
    $scope.deactivate = function(poll) {
      poll.activeUpdating = true;
      Poll.update({'id': poll._id}, {'active' : false}, function(newPoll) {
        poll.activeUpdating = false;
        if(newPoll.active !== undefined) {
          poll.active = newPoll.active;
        }
      }, function() {
        poll.activeUpdating = false;
      });
    };
  });
