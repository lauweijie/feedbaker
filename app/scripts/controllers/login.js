'use strict';

angular.module('feedbakerApp')
  .controller('LoginCtrl', function ($scope, $location, Auth) {
    $scope.redirect_to = $location.search().redirect_to;
  });
