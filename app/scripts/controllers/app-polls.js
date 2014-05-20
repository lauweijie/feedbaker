'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsCtrl', function ($scope, $location, Poll) {
    Poll.list(function(polls) {
      $scope.polls = polls;
    });
    $scope.view = function(poll_id) {
      $location.path('/app/polls/' + poll_id);
    };
    $scope.edit = function(poll_id) {
      $location.path('/app/polls/' + poll_id + '/edit');
    };
    $scope.activate = function(poll) {
      if(confirm("Activate poll?")) {
        poll.active = true;
        Poll.update({"id": poll._id}, {"active" : true});
      }
    };
    $scope.deactivate = function(poll) {
      if(confirm("Deactivate poll?")) {
        poll.active = false;
        Poll.update({"id": poll._id}, {"active" : false});
      }
    };
  });
