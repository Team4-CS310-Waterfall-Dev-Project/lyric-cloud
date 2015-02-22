'use strict';

/**
 * @ngdoc function
 * @name lyricCloudApp.controller:SongListCtrl
 * @description
 * # SongListCtrl
 * Controller of the lyricCloudApp
 */
angular.module('lyricCloudApp')
    .controller('SongListCtrl', function($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.goBack = function() {
            $location.path('/word-cloud/');
        };

    });