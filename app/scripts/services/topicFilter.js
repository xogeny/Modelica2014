'use strict';

angular.module('AppMod2014App')
  .service('topicFilter', function topicFilter(Schedule) {
      var checkSession = function(session, current) {
	  var details = Schedule["sessions"][session];
	  if (current==="") return true;
	  if (details["name"].toLowerCase().contains(current)) return true;
	  for(var i=0;i<details["papers"].length;i++) {
	      if (checkPaper(details["papers"][i], current)) return true;
	  }
	  return false;
      }
      var checkPaper = function(paper, current) {
	  var details = Schedule["papers"][paper];
	  if (current==="") return true;
	  if (details["title"].toLowerCase().contains(current)) return true;
	  if (details["abstract"].toLowerCase().contains(current)) return true;
	  for(var i=0;i<details["authors"].length;i++) {
	      if (details["authors"][i].toLowerCase().contains(current)) return true;
	  }
	  return false;
      }
      var checkSlot = function(slot, current) {
	  if (current==="") return true;
	  for(var i=0;i<slot.sessions.length;i++) {
	      if (checkSession(slot.sessions[i], current)) return true;
	  }
	  return false;
      }
      var checkDay = function(day, current) {
	  if (current==="") return true;
	  for(var i=0;i<day.slots.length;i++) {
	      if (checkSlot(day.slots[i], current)) return true;
	  }
	  return false;
      }
      return {
	  "current": "",
	  "checkDay": checkDay,
	  "checkSlot": checkSlot,
	  "checkSession": checkSession,
	  "checkPaper": checkPaper
      };
  });
