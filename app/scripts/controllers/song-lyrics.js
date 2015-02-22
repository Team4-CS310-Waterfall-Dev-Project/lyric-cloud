'use strict';

/**
 * @ngdoc function
 * @name lyricCloudApp.controller:SongLyricsCtrl
 * @description
 * # SongLyricsCtrl
 * Controller of the lyricCloudApp
 */
angular.module('lyricCloudApp')
    .controller('SongLyricsCtrl', function($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.goBack = function() {
            $location.path('/word-cloud/');
        };

        $scope.goBackToSongs = function() {
            $location.path('/song-list/');
        };
    });