'use strict';

describe('Service: Schedule', function () {

  // load the service's module
  beforeEach(module('AppMod2014App'));

  // instantiate service
  var Schedule;
  beforeEach(inject(function (_Schedule_) {
    Schedule = _Schedule_;
  }));

  it("should have a program object", function () {
      expect("program" in Schedule);
  });

  it("should have a papers array", function () {
      expect("papers" in Schedule);
  });

});
