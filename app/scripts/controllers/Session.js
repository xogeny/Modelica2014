'use strict';

angular.module('AppMod2014App')
  .controller('SessionCtrl', function ($scope, $routeParams) {
    $scope.session = $routeParams.id;
  });
