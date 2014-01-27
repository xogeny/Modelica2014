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

  it("first day of program should be Sunday", function () {
      expect(Schedule["program"][0]["day"]=="Sunday");
  });

  it("second day of program should be Monday", function () {
      expect(Schedule["program"][1]["day"]=="Monday");
  });

  it("third day of program should be Tuesday", function () {
      expect(Schedule["program"][2]["day"]=="Tuesday");
  });

  it("should have a papers array", function () {
      expect("papers" in Schedule);
  });
});
