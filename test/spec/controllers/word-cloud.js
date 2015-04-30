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

    it('should have a table of top 10 papers', function () {
        expect(scope.papers.length).toBe(10);
    });
});