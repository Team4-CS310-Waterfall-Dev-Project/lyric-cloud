'use strict';

/**
 * @ngdoc function
 * @name researchCloudApp.controller:pubListCtrl
 * @description
 * # pubListCtrl
 * Controller of the researchCloudApp
 */
angular.module('researchCloudApp')
    .controller('pubListCtrl', function($scope, $location, sharedProperties) {
        $scope.authors = sharedProperties.getProperty();
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