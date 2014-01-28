'use strict';

angular.module('AppMod2014App')
  .service('Userdata', function Userdata() {
      // Ultimately, this should be tied to some local database
      // (perhaps via JayData?).  We should try to detect if
      // local data is available and, if not, initialize that
      // data
      return {
	  "choices": {"T1": null, "T2": null, "T3": null, "T4": null,
		      "W1": null, "W2": null, "W3": null, "W4": null}
      }
  });
