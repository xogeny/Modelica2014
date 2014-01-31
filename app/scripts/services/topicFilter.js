'use strict';

angular.module('AppMod2014App')
  .service('topicFilter', function topicFilter(Schedule) {
      var match = function(term, text) {
	  var lower = text.toLowerCase();
	  var terms = term.toLowerCase().match(/\b\w+\b/g);
	  for(var i=0;i<terms.length;i++) {
	      if (lower.indexOf(terms[i])==-1) {
		  return false;
	      }
	  }
	  return true;
	  //return text.toLowerCase().indexOf(term)>=0;
      }

      var checkSession = function(session, current) {
	  var details = Schedule["sessions"][session];
	  var name = details["name"];
	  var lcname = name.toLowerCase();
	  var papers = details["papers"];
	  if (current==="") return true;
	  if (match(current, lcname)) return true;
	  for(var i=0;i<papers.length;i++) {
	      if (checkPaper(papers[i], current)) return true;
	  }
	  return false;
      }
      var checkPaper = function(paper, current) {
	  var details = Schedule["papers"][paper];
	  if (current==="") return true;
	  var corpus = details["title"]+
	      details["abstract"]+
	      details["keywords"].join(" ")+
	      details["authors"].join(" ");
	  /*
	  if (match(current, details["title"])) return true;
	  if (match(current, details["abstract"])) return true;
	  for(var i=0;i<details["keywords"].length;i++) {
	      if (match(current, details["keywords"][i])) return true;
          }
	  for(var i=0;i<details["authors"].length;i++) {
	      if (match(current, details["authors"][i])) return true;
	  }
	  	  return false;
	  */
	  return match(current, corpus);
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
