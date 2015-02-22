'use strict';

describe('Controller: WordCloudCtrl', function () {

  // load the controller's module
  beforeEach(module('lyricCloudApp'));

  var WordCloudCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WordCloudCtrl = $controller('WordCloudCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
