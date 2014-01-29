'use strict';

angular.module('AppMod2014App')
  .controller('MainCtrl', function ($scope, Schedule, Userdata, topicFilter) {
      $scope.schedule = Schedule;
      //$scope.choices = {"T1": "B", "T2": "A"};
      $scope.choices = Userdata.get("choices");

      /* This is enormously ugly but it was the only way I found that I could
	 work around an issue with Firefox not reliably detecting changes...ARGH!
	 (see more below) */
      $scope.$watch(function() { 
	  return angular.toJson($scope.choices);
      }, function(nv, ov) {
	  //console.log("Choices STRING changed from "+ov+" to "+nv);
	  Userdata.set("choices", $scope.choices);
      });

      /* This SHOULD work, but doesn't (work reliably in Firefox) */
      /*
      $scope.$watch("choices", function (nv, ov) {
	  console.log("Choices changed from "+ov+" to "+nv);
      }, true);
      */

      $scope.searchTerm = topicFilter.current;
      $scope.$watch('searchTerm', function (nv, ov) {
	  topicFilter.current = nv;
      });
      $scope.showDay = function(day) {
	  return topicFilter["checkDay"](day, topicFilter.current.toLowerCase());
      };
      $scope.showSlot = function(slot) {
	  return topicFilter["checkSlot"](slot, topicFilter.current.toLowerCase());
      };
      $scope.showSession = function(session) {
	  return topicFilter["checkSession"](session, topicFilter.current.toLowerCase());
      };
  });
