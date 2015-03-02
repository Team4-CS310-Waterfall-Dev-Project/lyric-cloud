'use strict';

/**
 * @ngdoc function
 * @name lyricCloudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lyricCloudApp
 */
angular.module('lyricCloudApp')
    .controller('MainCtrl', function($scope, $location, sharedProperties) {
        $scope.artists = [];

        $scope.displayWordCloud = function() {
            $location.path('/word-cloud/');
            //TODO call php to display word cloud
        };

        //called when the user presses submit
        $scope.newArtist = function(artistName) {
            $scope.artists = [artistName];

            //TODO call php to display word cloud

            console.log($scope.artists);
            $scope.displayWordCloud();
            sharedProperties.setProperty($scope.artists);
            //TODO pass the artist currently being used to word-cloud
        };
    })

.service('sharedProperties', function() {
    var property = {
        artists: 'First Artist'
    };

    return {
        getProperty: function() {
            return property;
        },
        setProperty: function(value) {
            property = value;
        }
    };
});