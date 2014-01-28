'use strict';

angular.module('AppMod2014App')
  .controller('MainCtrl', function ($scope, Schedule, Userdata, topicFilter) {
      $scope.schedule = Schedule;
      $scope.userdata = Userdata;
      $scope.searchTerm = topicFilter.current;
      $scope.$watch('searchTerm', function (nv, ov) {
	  topicFilter.current = nv;
      });
      $scope.showSession = function(session) {
	  return topicFilter["checkSession"](session, topicFilter.current);
      }
  });
