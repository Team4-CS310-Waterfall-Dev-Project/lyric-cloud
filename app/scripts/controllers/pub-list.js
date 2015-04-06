'use strict';

/**
 * @ngdoc function
 * @name lyricCloudApp.controller:pubListCtrl
 * @description
 * # pubListCtrl
 * Controller of the lyricCloudApp
 */
angular.module('lyricCloudApp')
    .controller('pubListCtrl', function($scope, $location, sharedProperties) {
        $scope.artists = sharedProperties.getProperty();
        $scope.pubList = sharedProperties.getpubList();
        $scope.currentpub = sharedProperties.getCurrentpub();


        $scope.goBack = function() {

            $location.path('/word-cloud/');
        };

        $scope.showresearchs = function(pub) {
            $scope.currentpub = pub;
            sharedProperties.setCurrentpub($scope.currentpub);
            $location.path('/pub-researchs/');

            console.log($scope.currentpub);
        };

    })

.service('sharedProperties', function() {
    //TODO change to list of artists, pubs
    var property = {
        artists: 'First artist'
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