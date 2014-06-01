'use strict';

angular.module('feedbakerApp')
  .controller('AppNavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Dashboard',
      'link': '/app/dashboard'
    }, {
      'title': 'My Polls',
      'link': '/app/polls'
    }, {
      'title': 'Profile',
      'link': '/app/profile'
    }];
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/');
      });
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
