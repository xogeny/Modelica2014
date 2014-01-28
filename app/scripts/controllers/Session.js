'use strict';

angular.module('AppMod2014App')
  .controller('SessionCtrl', function ($scope, $routeParams, Schedule) {
    $scope.session = Schedule["sessions"][$routeParams.id];
    $scope.papers = Schedule["papers"]
  });
