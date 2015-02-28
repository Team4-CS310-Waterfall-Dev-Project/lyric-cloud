'use strict';

/**
 * @ngdoc function
 * @name lyricCloudApp.controller:WordCloudCtrl
 * @description
 * # WordCloudCtrl
 * Controller of the lyricCloudApp
 */
angular.module('lyricCloudApp')
    .controller('WordCloudCtrl', function($scope, $location, sharedProperties) {
        $scope.artists = sharedProperties.getProperty();

        //called when pressing submit -- can be taken out
        $scope.displayWordCloud = function() {
            $location.path('/word-cloud/');
        };

        //called when a word is selected from the word cloud
        $scope.displaySongList = function() {
            $location.path('/song-list');
        };

        //called when the user presses submit
        $scope.newArtist = function(artistName) {
            $scope.artists = [artistName];
            sharedProperties.setProperty($scope.artists)
            //TODO call php to display word cloud

            console.log($scope.artists);
        };

        //called when the user presses add to word cloud
        $scope.addArtist = function(artistName) {
            $scope.artists.push(artistName);
            sharedProperties.setProperty($scope.artists)
            //TODO call php to display word cloud

            //formatting for getting data from php
            // var phpadd = <? php echo add(1, 2); ?> //call the php add function
            // var phpmult = <? php echo mult(1, 2); ?> //call the php mult function
            // var phpdivide = <? php echo divide(1, 2); ?> //call the php divide function

            console.log($scope.artists);
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