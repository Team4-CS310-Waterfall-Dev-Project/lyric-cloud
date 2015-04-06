'use strict';

/**
 * @ngdoc function
 * @name lyricCloudApp.controller:WordCloudCtrl
 * @description
 * # WordCloudCtrl
 * Controller of the lyricCloudApp
 */
angular.module('lyricCloudApp')
    .controller('WordCloudCtrl', function($scope, $location, sharedProperties, sharedProperties2) {
        $scope.artists = sharedProperties.getProperty();
        $scope.currentSong = sharedProperties.getCurrentSong();	
//	$scope.word = sharedProperties2.getSomeWord();
//        $scope.JSONvar = sharedProperties2.getSomeWord();
	
$scope.word = "<html><div> ";
for ($scope.i=0; $scope.i < sharedProperties2.getSomeWord().data.length; $scope.i++){
//$scope.font_size = sharedProperties2.getSomeWord().data[$scope.i ].Size;
$scope.word += "<span style=\"font-size: "+ sharedProperties2.getSomeWord().data[$scope.i ].Size
 + "px;\">" + sharedProperties2.getSomeWord().data[$scope.i ].Word + "</span> ";
//$scope.word += sharedProperties2.getSomeWord().data[$scope.i ].Word + " "+ sharedProperties2.getSomeWord().data[$scope.i ].Size;
	//$scope.word = $scope.testWord + " ";
}
$scope.word += "</div></html>";

$scope.songList = sharedProperties.getSongList();


        //called when pressing submit -- can be taken out
        $scope.displayWordCloud = function() {
            $location.path('/word-cloud/');
        };

        //called when a word is selected from the word cloud
        $scope.displaySongList = function(word) {
            $scope.currentSong = [word];
            sharedProperties.setCurrentSong($scope.currentSong);
            $location.path('/song-list');

            console.log($scope.currentSong);
        };

        //called when the user presses submit
        $scope.newArtist = function(artistName) {
            $scope.artists = [artistName];
            sharedProperties.setProperty($scope.artists);
            //TODO call php to display word cloud

            console.log($scope.artists);
        };

        //called when the user presses add to word cloud
        $scope.addArtist = function(artistName) {
            $scope.artists.push(artistName);
            sharedProperties.setProperty($scope.artists);
            //TODO call php to display word cloud

            //formatting for getting data from php
            // var phpadd = <? php echo add(1, 2); ?> //call the php add function
            // var phpmult = <? php echo mult(1, 2); ?> //call the php mult function
            // var phpdivide = <? php echo divide(1, 2); ?> //call the php divide function

            console.log($scope.artists);
        };
    })

.service('sharedProperties', function() {
    //TODO change to list of artists, songs
    var property = 'First Artist'
    ;

    var songList = {
        songs: 'song1'
    };

    var currentSong = {
        song: 'this song'
    };
var someWord = 'testCh';
    return {
	getSomeWord: function() {
            return someWord;
        },
        setSomeWord: function(value) {
            someWord = value;
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
