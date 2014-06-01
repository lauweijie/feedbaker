'use strict';

angular.module('feedbakerApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/');
      });
    };

  });
