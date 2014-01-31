'use strict';

angular.module('AppMod2014App')
  .service('topicFilter', function topicFilter(Schedule) {
      var checkSession = function(session, current) {
	  var details = Schedule["sessions"][session];
	  var name = details["name"];
	  var lcname = name.toLowerCase();
	  var papers = details["papers"];
	  if (current==="") return true;
	  if (lcname.indexOf(current)>=0) return true;
	  for(var i=0;i<papers.length;i++) {
	      if (checkPaper(papers[i], current)) return true;
	  }
	  return false;
      }
      var checkPaper = function(paper, current) {
	  var details = Schedule["papers"][paper];
	  if (current==="") return true;
	  if (details["title"].toLowerCase().indexOf(current)>=0) return true;
	  if (details["abstract"].toLowerCase().indexOf(current)>=0) return true;
	  for(var i=0;i<details["keywords"].length;i++) {
	      if (details["keywords"][i].toLowerCase().indexOf(current)>=0) return true;
	  }
	  for(var i=0;i<details["authors"].length;i++) {
	      if (details["authors"][i].toLowerCase().indexOf(current)>=0) return true;
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
	      var slot = Schedule['slots'][day.slots[i]];
	      if (checkSlot(slot, current)) return true;
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
