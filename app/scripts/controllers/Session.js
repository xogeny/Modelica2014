'use strict';

angular.module('AppMod2014App')
  .controller('SessionCtrl', function ($scope, $routeParams, Schedule, Userdata, topicFilter) {
      $scope.session = Schedule["sessions"][$routeParams.id];
      $scope.id = $routeParams.id;
      $scope.papers = Schedule["papers"]
      $scope.disposition = Userdata.get("disposition");
      $scope.slots = Schedule["slots"]
      $scope.choices = Userdata.get("choices");

      $scope.PRESENTING = 'presenting';
      $scope.CHAIRING = 'chairing';
      $scope.ATTEND = 'attend';
      $scope.INTERESTING = 'interesting';
      $scope.NEUTRAL = null;

      /* See main.js for why I did it this (stupid) way */
      $scope.$watch(function() { 
	  return angular.toJson($scope.choices);
      }, function(nv, ov) {
	  Userdata.set("choices", $scope.choices);
      });

      $scope.$watch(function() {
	  return angular.toJson($scope.disposition);
      }, function (nv, ov) {
	  Userdata.set("disposition", $scope.disposition);
      });

      $scope.slot = $routeParams.id[0]+$routeParams.id[1];
      $scope.selected = $scope.choices[$scope.slot];
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
