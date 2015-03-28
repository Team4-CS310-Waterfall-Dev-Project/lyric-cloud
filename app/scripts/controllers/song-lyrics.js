'use strict';

/**
 * @ngdoc function
 * @name researchCloudApp.controller:pubresearchsCtrl
 * @description
 * # pubresearchsCtrl
 * Controller of the researchCloudApp
 */
angular.module('researchCloudApp')
    .controller('pubresearchsCtrl', function($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.goBack = function() {
            $location.path('/word-cloud/');
        };

        $scope.goBackTopubs = function() {
            $location.path('/pub-list/');
        };
    });