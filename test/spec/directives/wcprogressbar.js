'use strict';

describe('Directive: wcProgressBar', function () {

  // load the directive's module
  beforeEach(module('lyricCloudApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wc-progress-bar></wc-progress-bar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the wcProgressBar directive');
  }));
});
