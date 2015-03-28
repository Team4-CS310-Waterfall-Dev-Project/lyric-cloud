'use strict';

/**
 * @ngdoc function
 * @name researchCloudApp.controller:WordCloudCtrl
 * @description
 * # WordCloudCtrl
 * Controller of the researchCloudApp
 */
angular.module('researchCloudApp')
    .controller('WordCloudCtrl', function($scope, $location, sharedProperties) {
        $scope.authors = sharedProperties.getProperty();
        $scope.currentpub = sharedProperties.getCurrentpub();
        $scope.pubList = sharedProperties.getpubList();

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
    //TODO change to list of authors, pubs
    var property = {
        authors: 'First author'
    };

    var pubList = {
        pubs: 'pub1'
    };

    var currentpub = {
        pub: 'this pub'
    };

    return {
        getProperty: function() {
            return property;
        },
        setProperty: function(value) {
            property = value;
        },
        getpubList: function() {
            return pubList;
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