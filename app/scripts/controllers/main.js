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
        $scope.$watch('something', function(newVal, oldVal) {
            if (newVal === oldVal) return;
            $location.path('/word-cloud/');
            sharedProperties2.setSomeWord($scope.something);
        });
        $scope.displayWordCloud = function() {
            //TODO  $location.path('/word-cloud/');
            //TODO call php to display word cloud
        };
        //called when the user presses submit
        $scope.newArtist = function(artistName) {
            $scope.artists = artistName;

            //change boolean to display progress bar
            $scope.wordCloudGenerating = true;

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
            //.success(function(data){
            //sharedProperties2.setSomeWord(data);
            //})
            .then(function(response) {
                $scope.something = response.data;
            });
            /*
		$http.post("localhost:8080/test.php",{"data" : $scope.artistName}).success(function(data, status){
	$scope.result = data;
	alert(status);
})
.
error(function(data, status){
	$scope.data=data;
alert("fail");
});
*/


            //end WIP
            console.log($scope.artists);
            $scope.displayWordCloud();
            sharedProperties.setProperty($scope.artists);
            sharedProperties2.setSomeWord($scope.something);
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