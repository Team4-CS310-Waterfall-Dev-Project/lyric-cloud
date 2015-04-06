'use strict';

/**
 * @ngdoc function
 * @name researchCloudApp.controller:WordCloudCtrl
 * @description
 * # WordCloudCtrl
 * Controller of the researchCloudApp
 */
angular.module('researchCloudApp')
    .controller('WordCloudCtrl', function($scope, $location, sharedProperties, sharedProperties2) {
        $scope.artists = sharedProperties.getProperty();
        $scope.currentSong = sharedProperties.getCurrentSong();
        //	$scope.word = sharedProperties2.getSomeWord();
        //        $scope.JSONvar = sharedProperties2.getSomeWord();

        $scope.word = "<html><div> ";
        for ($scope.i = 0; $scope.i < sharedProperties2.getSomeWord().data.length; $scope.i++) {
            //$scope.font_size = sharedProperties2.getSomeWord().data[$scope.i ].Size;
            $scope.word += "<span style=\"font-size: {" + sharedProperties2.getSomeWord().data[$scope.i].Size + "px;\">" + sharedProperties2.getSomeWord().data[$scope.i].Word + "</span> ";
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
        $scope.displaypubList = function(word) {
            $scope.currentpub = [word];
            sharedProperties.setCurrentpub($scope.currentpub);
            $location.path('/pub-list');

            console.log($scope.currentpub);
        };

        //called when the user presses submit
        $scope.newauthor = function(authorName) {
            $scope.authors = [authorName];
            sharedProperties.setProperty($scope.authors);
            //TODO call php to display word cloud

            console.log($scope.authors);
        };

        //called when the user presses add to word cloud
        $scope.addauthor = function(authorName) {
            $scope.authors.push(authorName);
            sharedProperties.setProperty($scope.authors);
            //TODO call php to display word cloud

            //formatting for getting data from php
            // var phpadd = <? php echo add(1, 2); ?> //call the php add function
            // var phpmult = <? php echo mult(1, 2); ?> //call the php mult function
            // var phpdivide = <? php echo divide(1, 2); ?> //call the php divide function

            console.log($scope.authors);
        };
    })

.service('sharedProperties', function() {
    //TODO change to list of artists, songs
    var property = 'First Artist';

    var pubList = {
        pubs: 'pub1'
    };

    var currentpub = {
        pub: 'this pub'
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
        setpubList: function(value) {
            pubList = value;
        },
        getCurrentpub: function() {
            return currentpub;
        },
        setCurrentpub: function(value) {
            currentpub = value;
        }
    };
});