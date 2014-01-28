'use strict';

angular.module('AppMod2014App')
  .service('topicFilter', function topicFilter(Schedule) {
      var checkSession = function(session, current) {
	  var details = Schedule["sessions"][session];
	  if (current==="") return true;
	  if (details["name"].contains(current)) return true;
	  for(var i=0;i<details["papers"].length;i++) {
	      if (checkPaper(details["papers"][i], current)) return true;
	  }
	  return false;
      }
      var checkPaper = function(paper, current) {
	  var details = Schedule["papers"][paper];
	  if (current==="") return true;
	  if (details["title"].contains(current)) return true;
	  if (details["abstract"].contains(current)) return true;
	  for(var i=0;i<details["authors"].length;i++) {
	      if (details["authors"][i].contains(current)) return true;
	  }
	  return false;
      }
      return {
	  "current": "",
	  "checkSession": checkSession,
	  "checkPaper": checkPaper
      };
  });
