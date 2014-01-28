'use strict';

angular.module('AppMod2014App')
  .controller('MainCtrl', function ($scope, Schedule, Userdata) {
      $scope.schedule = Schedule;
      $scope.userdata = Userdata;
  });
