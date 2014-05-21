'use strict';

angular.module('feedbakerApp')
  .controller('LoginCtrl', function ($scope, $location) {
    $scope.redirectTo = $location.search().redirectTo;
  });
