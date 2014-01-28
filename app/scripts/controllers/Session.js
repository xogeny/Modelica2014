'use strict';

angular.module('AppMod2014App')
  .controller('SessionCtrl', function ($scope, $routeParams, Schedule) {
    $scope.session_id = $routeParams.id;
  });
