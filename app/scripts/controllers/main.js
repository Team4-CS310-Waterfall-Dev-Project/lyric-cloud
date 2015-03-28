'use strict';

/**
 * @ngdoc function
 * @name researchCloudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the researchCloudApp
 */
angular.module('researchCloudApp')
    .controller('MainCtrl', function($scope, $location, sharedProperties) {
        $scope.authors = [];

        $scope.displayWordCloud = function() {
            $location.path('/word-cloud/');
            //TODO call php to display word cloud
        };

        //called when the user presses submit
        $scope.newauthor = function(authorName) {
            $scope.authors = [authorName];

            //TODO call php to display word cloud

            console.log($scope.authors);
            $scope.displayWordCloud();
            sharedProperties.setProperty($scope.authors);
            //TODO pass the author currently being used to word-cloud
        };
    })

.service('sharedProperties', function() {
    var property = {
        authors: 'First author'
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