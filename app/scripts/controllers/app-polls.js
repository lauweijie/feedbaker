'use strict';

angular.module('feedbakerApp')
  .controller('AppPollsCtrl', function ($scope, $location, Auth) {
    $scope.polls = [
      {}, {}, {}
    ];
});
