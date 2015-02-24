'use strict';

/**
 * @ngdoc function
 * @name lyricCloudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lyricCloudApp
 */
angular.module('lyricCloudApp')
    .controller('MainCtrl', function($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.displayWordCloud = function() {
            $location.path('/word-cloud/');
            //TODO call php to display word cloud
        };
    });