'use strict';

angular.module('AppMod2014App')
  .controller('SessionCtrl', function ($scope, $routeParams, Schedule, Userdata, topicFilter) {
      $scope.session = Schedule["sessions"][$routeParams.id];
      $scope.id = $routeParams.id;
      $scope.papers = Schedule["papers"]
      $scope.userdata = Userdata
      $scope.slot = $routeParams.id[0]+$routeParams.id[1];
      $scope.selected = Userdata['choices'][$scope.slot];
      $scope.searchTerm = topicFilter.current;
      $scope.$watch('searchTerm', function (nv, ov) {
	  topicFilter.current = nv;
      });
      $scope.showPaper = function(pnum) {
	  return topicFilter["checkPaper"](pnum, topicFilter.current.toLowerCase());
      };
      if ($scope.selected!=null) {
	  var fullname = $scope.slot+"-"+$scope.selected;
	  $('#switch').tooltip({
	      'placement': "left",
	      'title': "Current session: "+Schedule["sessions"][fullname].name
	  });
      }
  });
