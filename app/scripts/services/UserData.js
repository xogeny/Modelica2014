'use strict';

function mod2014_reset() {
    localStorage.clear();
}

angular.module('AppMod2014App')
  .service('Userdata', function Userdata() {
      var baseData = {
	  "version": 6,
	  "disposition": {},
	  "choices": {"T1": null, "T2": null, "T3": null, "T4": null,
		      "W1": null, "W2": null, "W3": null, "W4": null}
      };
      try {
	  var init = angular.fromJson(localStorage.mod2014);

	  if (init===undefined) {
	      console.log("Initializing mod2014 data");
	      localStorage.mod2014 = angular.toJson(baseData);
	  } else if (init['version']!=baseData['version']) {
	      console.log("Resetting mod2014 data because of a new version");
	      localStorage.mod2014 = angular.toJson(baseData);	  
	  } else {
	      console.log("Using restored value for mod2014");
	  }
	  return {
	      set: function(k, v) {
		  var data = angular.fromJson(localStorage.getItem("mod2014"));
		  data[k] = v;
		  localStorage.setItem("mod2014", angular.toJson(data));
		  return v;
	      },
	      get: function(k) {
		  return angular.fromJson(localStorage.getItem("mod2014"))[k];
	      }
	  };
      } catch(err) {
	  alert("Unable to initialialize local storage.\n\nThis could be because of an outdated browser or because you have 'private browsing' enabled.\n\nUnfortunately, as a result, your selections cannot be stored.\n\nError: "+err);
	  return {
	      set: function(k, v) { baseData[k] = v; return v; },
	      get: function(k) { return baseData[k]; }
	  };
      }
  });
