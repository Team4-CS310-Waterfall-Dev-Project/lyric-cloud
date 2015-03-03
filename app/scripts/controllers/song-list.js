'use strict';

/**
 * @ngdoc function
 * @name lyricCloudApp.controller:SongListCtrl
 * @description
 * # SongListCtrl
 * Controller of the lyricCloudApp
 */
angular.module('lyricCloudApp')
    .controller('SongListCtrl', function($scope, $location, sharedProperties) {
        $scope.artists = sharedProperties.getProperty();
        $scope.songList = sharedProperties.getSongList();
        $scope.currentSong = sharedProperties.getCurrentSong();


        $scope.goBack = function() {

            $location.path('/word-cloud/');
        };

        $scope.showLyrics = function(song) {
            $scope.currentSong = song;
            sharedProperties.setCurrentSong($scope.currentSong);
            $location.path('/song-lyrics/');

            console.log($scope.currentSong);
        };

    })

.service('sharedProperties', function() {
    //TODO change to list of artists, songs
    var property = {
        artists: 'First Artist'
    };

    var songList = {
        songs: 'song1'
    };

    var currentSong = {
        song: 'this song'
    };

    return {
        getProperty: function() {
            return property;
        },
        setProperty: function(value) {
            property = value;
        },
        getSongList: function() {
            return songList;
        },
        setSongList: function(value) {
            songList = value;
        },
        getCurrentSong: function() {
            return currentSong;
        },
        setCurrentSong: function(value) {
            currentSong = value;
        }
    };
});