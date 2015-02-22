'use strict';

describe('Controller: SongListCtrl', function () {

  // load the controller's module
  beforeEach(module('lyricCloudApp'));

  var SongListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SongListCtrl = $controller('SongListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
