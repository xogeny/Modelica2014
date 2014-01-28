'use strict';

angular.module('AppMod2014App')
  .controller('MainCtrl', function ($scope, Schedule) {
      $scope.schedule = Schedule;
  });
