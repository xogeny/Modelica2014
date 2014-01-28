'use strict';

describe('Service: Topicfilter', function () {

  // load the service's module
  beforeEach(module('Appmod2014App'));

  // instantiate service
  var Topicfilter;
  beforeEach(inject(function (_Topicfilter_) {
    Topicfilter = _Topicfilter_;
  }));

  it('should do something', function () {
    expect(!!Topicfilter).toBe(true);
  });

});
