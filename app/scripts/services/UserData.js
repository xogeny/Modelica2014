'use strict';

function mod2014_reset() {
    localStorage.clear();
}

angular.module('AppMod2014App')
  .service('Userdata', function Userdata() {
      var baseData = {
	  "version": 1,
	  "choices": {"T1": null, "T2": null, "T3": null, "T4": null,
		      "W1": null, "W2": null, "W3": null, "W4": null}
      };
      var init = angular.fromJson(localStorage.mod2014);
      console.log("mod2014 = ");
      console.log(init);

      if (init===undefined) {
	  console.log("Initializing mod2014 data");
	  localStorage.mod2014 = angular.toJson(baseData);
      } else if (init['version']!=baseData['version']) {
	  console.log("Resetting mod2014 data because of a new version");
	  localStorage.mod2014 = angular.toJson(baseData);	  
      }
      var foo = {"choices": {"T1": "B", "T2": "A"}};
      return {
	  set: function(k, v) {
	      console.log("Setting "+k+" to be "+v);
	      var data = angular.fromJson(localStorage.getItem("mod2014"));
	      //foo[k] = v;
	      data[k] = v;
	      localStorage.setItem("mod2014", angular.toJson(data));
	      return v;
	  },
	  get: function(k) {
	      //return foo[k];
	      return angular.fromJson(localStorage.getItem("mod2014"))[k];
	  }
      };
      /*
      var init = angular.fromJson(localStorage.mod2014);
      console.log("mod2014 = ");
      console.log(init);

      if (init===undefined) {
	  localStorage.mod2014 = angular.toJson(baseData);
      }
      // Ultimately, this should be tied to some local database
      // (perhaps via JayData?).  We should try to detect if
      // local data is available and, if not, initialize that
      // data
      return baseData;
      */
  });
