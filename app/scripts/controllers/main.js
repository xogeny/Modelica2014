'use strict';

angular.module('AppMod2014App')
  .controller('MainCtrl', function ($scope, Schedule, Userdata, topicFilter) {
      $scope.schedule = Schedule;
      $scope.choices = Userdata.get("choices");
      $scope.disposition = Userdata.get("disposition");

      $scope.anyDisposition = function(session) {
	  for (var i=0;i<$scope.schedule['sessions'][session].papers.length;i++) {
	      if ($scope.disposition[$scope.schedule['sessions'][session].papers[i]]!=null)
		  return true;
	  }
	  return false;
      };
      /* This is enormously ugly but it was the only way I found that I could
	 work around an issue with Firefox not reliably detecting changes...ARGH!
	 (see more below) */
      $scope.$watch(function() { 
	  return angular.toJson($scope.choices);
      }, function(nv, ov) {
	  Userdata.set("choices", $scope.choices);
      });

      /* This SHOULD work, but doesn't (work reliably in Firefox) */
      /*
      $scope.$watch("choices", function (nv, ov) {
	  console.log("Choices changed from "+ov+" to "+nv);
      }, true);
      */

      $scope.$watch(function() {
	  return angular.toJson($scope.disposition);
      }, function (nv, ov) {
	  Userdata.set("disposition", $scope.disposition);
      });

      $scope.searchTerm = topicFilter.current;
      $scope.$watch('searchTerm', function (nv, ov) {
	  topicFilter.current = nv;
      });
      $scope.showDay = function(day) {
	  return topicFilter["checkDay"](day, topicFilter.current.toLowerCase());
      };
      $scope.showSlot = function(slotid) {
	  var slot = Schedule['slots'][slotid];
	  return topicFilter["checkSlot"](slot, topicFilter.current.toLowerCase());
      };
      $scope.showSession = function(session) {
	  return topicFilter["checkSession"](session, topicFilter.current.toLowerCase());
      };
  });
