'use strict';

describe('Service: Userdata', function () {

  // load the service's module
  beforeEach(module('Appmod2014App'));

  // instantiate service
  var Userdata;
  beforeEach(inject(function (_Userdata_) {
    Userdata = _Userdata_;
  }));

  it('should do something', function () {
    expect(!!Userdata).toBe(true);
  });

});
