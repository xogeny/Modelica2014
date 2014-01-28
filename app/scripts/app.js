'use strict';

angular.module('AppMod2014App', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/session/:id', {
	templateUrl: 'views/session.html',
	controller: 'SessionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
