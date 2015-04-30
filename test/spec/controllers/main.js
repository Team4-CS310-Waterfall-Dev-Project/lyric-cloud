'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('lyricCloudApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should have an empty autocomplete box', function () {
        expect(scope.artists.getText()).toBe("");
    });
});