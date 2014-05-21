'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsCtrl', function ($scope, $location, Poll) {
    Poll.list(function(polls) {
      $scope.polls = polls;
    });
    $scope.view = function(id) {
      $location.path('/app/polls/' + id);
    };
    $scope.edit = function(id) {
      $location.path('/app/polls/' + id + '/edit');
    };
    $scope.activate = function(poll) {
      if(confirm('Activate poll?')) {
        poll.active = true;
        Poll.update({'id': poll._id}, {'active' : true});
      }
    };
    $scope.deactivate = function(poll) {
      if(confirm('Deactivate poll?')) {
        poll.active = false;
        Poll.update({'id': poll._id}, {'active' : false});
      }
    };
  });
