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
  });
