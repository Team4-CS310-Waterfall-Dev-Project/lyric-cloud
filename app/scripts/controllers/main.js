'use strict';

/**
 * @ngdoc function
 * @name lyricCloudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lyricCloudApp
 */
angular.module('lyricCloudApp')
    .controller('MainCtrl', function($scope, $http, $location, sharedProperties, sharedProperties2) {
        $scope.artists = "";
        $scope.wordCloudGenerating = false;
        $scope.something = [];
        $scope.bar = $('.bar');
        $scope.$watch('something', function(newVal, oldVal) {
            $scope.resetProgressBar();

            if (newVal === oldVal) return;
            $location.path('/word-cloud/');
            sharedProperties2.setSomeWord($scope.something);
        });
        //called when the user presses submit
        $scope.newArtist = function(artistName) {
            $scope.artists = artistName;

            //change boolean to display progress bar
            $scope.wordCloudGenerating = true;

            $scope.startProgressBar();

            //WIP   
            var config = $http({
                method: 'POST',
                url: 'http://localhost:8080/app/php/wordCloud.php',
                data: {
                    scholar: $scope.artists
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            config
                .then(function(response) {
                    $scope.something = response.data;
                });

            console.log($scope.artists);
            sharedProperties.setProperty($scope.artists);
            sharedProperties2.setSomeWord($scope.something);
        };

        $scope.startProgressBar = function() {
            //width is 660
            $scope.bar.width(0);
            $scope.bar

            var progress = setInterval(function() {

                if ($scope.bar.width() > 660) {
                    clearInterval(progress);
                } else {
                    $scope.bar.width($scope.bar.width() + 66);
                }
                $scope.bar.text($scope.bar.width() / 6.6 + "%");
            }, 800);

        };

        $scope.resetProgressBar = function() {
            $scope.bar.width(0);
            $scope.bar.text('0%');
        };
    })

.service('sharedProperties', function() {
    var property = 'First Artist';
    return {
        getProperty: function() {
            return property;
        },
        setProperty: function(value) {
            property = value;
        }
    };
})
    .service('sharedProperties2', function() {
        var someWord = 'Undefined';
        return {
            getSomeWord: function() {
                return someWord;
            },
            setSomeWord: function(value) {
                someWord = value;
            }
        };
    });