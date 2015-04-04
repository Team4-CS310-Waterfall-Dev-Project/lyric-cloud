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

        $scope.goBack = function() {
            $location.path('/word-cloud/');
        };

        $scope.goBackTopubs = function() {
            $location.path('/pub-list/');
        };
    });