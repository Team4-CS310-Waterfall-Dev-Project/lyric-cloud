'use strict';

describe('Controller: SongLyricsCtrl', function () {

  // load the controller's module
  beforeEach(module('lyricCloudApp'));

  var SongLyricsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SongLyricsCtrl = $controller('SongLyricsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
