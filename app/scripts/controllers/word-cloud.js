'use strict';

/**
 * @ngdoc function
 * @name lyricCloudApp.controller:WordCloudCtrl
 * @description
 * # WordCloudCtrl
 * Controller of the lyricCloudApp
 */
angular.module('lyricCloudApp')
    .controller('WordCloudCtrl', function($scope, $location, $artistName) {
            $scope.artists = [];

            $scope.displayWordCloud = function() {
                $location.path('/word-cloud/');
                //TODO call php to display word cloud
            };

            $scope.addArtist = function($artistName) {
                $scope.artists.push($artistName);
                //TODO call php to display word cloud
            };
        }

});