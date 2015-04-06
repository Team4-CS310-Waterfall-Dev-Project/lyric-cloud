'use strict';

/**
 * @ngdoc function
 * @name lyricCloudApp.controller:pubresearchsCtrl
 * @description
 * # pubresearchsCtrl
 * Controller of the lyricCloudApp
 */
angular.module('lyricCloudApp')
    .controller('pubresearchsCtrl', function($scope, $location) {

        $scope.goBack = function() {
            $location.path('/word-cloud/');
        };

        $scope.goBackTopubs = function() {
            $location.path('/pub-list/');
        };
    });