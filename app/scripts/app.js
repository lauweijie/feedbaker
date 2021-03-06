'use strict';

angular.module('feedbakerApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'angularMoment',
  'googlechart',
  'ngFitText',
  'btford.socket-io',
  'duScroll'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'DefaultCtrl'
      })
      .when('/about', {
        templateUrl: 'partials/about',
        controller: 'DefaultCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/app', {
        redirectTo: '/app/polls'
      })
      .when('/app/polls', {
        templateUrl: 'partials/app-polls',
        controller: 'AppPollsCtrl',
        authenticate: true
      })
      .when('/app/polls/new', {
        templateUrl: 'partials/app-polls-new',
        controller: 'AppPollsNewCtrl',
        authenticate: true
      })
      .when('/app/polls/:id', {
        templateUrl: 'partials/app-polls-view',
        controller: 'AppPollsViewCtrl',
        authenticate: true
      })
      .when('/app/polls/:id/results', {
        templateUrl: 'partials/app-polls-results',
        controller: 'AppPollsResultsCtrl',
        authenticate: true
      })
      .when('/a/:shortid', {
        templateUrl: 'partials/app-polls-answer',
        controller: 'AppPollsAnswerCtrl',
        authenticate: true
      })
      .when('/app/profile', {
        templateUrl: 'partials/app-profile',
        controller: 'DefaultCtrl',
        authenticate: true
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      if (next.authenticate && !Auth.isLoggedIn()) {
        var queryString = {};
        if(next.$$route.originalPath !== undefined) {
          queryString = {'redirectTo': location.pathname};
        }
        $location.path('/login').search(queryString);
      }
    });
  });
