'use strict';

/**
 * @ngdoc function
 * @name lyricCloudApp.controller:WordCloudCtrl
 * @description
 * # WordCloudCtrl
 * Controller of the lyricCloudApp
 */
angular.module('lyricCloudApp')
    .controller('WordCloudCtrl', function($scope, $http, $sce, $location, sharedProperties, sharedProperties2, $compile) {
        $scope.artists = sharedProperties.getProperty();
        //	$scope.word = sharedProperties2.getSomeWord();
        //        $scope.JSONvar = sharedProperties2.getSomeWord();

        //working code TODO remove comments
        $scope.words = [];
        for ($scope.i = 0; $scope.i < sharedProperties2.getSomeWord().data.length; $scope.i++) {
            $scope.words[$scope.words.length] = {
                Id: $scope.i,
                Word: sharedProperties2.getSomeWord().data[$scope.i].Word,
                Size: sharedProperties2.getSomeWord().data[$scope.i].Size
            };
        }
        //alert($scope.words[0].Id+ " " + $scope.words[0].Word + " "+$scope.words[0].Size);


        //called when the user presses submit
        $scope.newArtist = function(artistName) {
            $scope.artists = artistName;

            //change boolean to display progress bar
            $scope.wordCloudGenerating = true;

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
            $scope.displayWordCloud();
            sharedProperties.setProperty($scope.artists);
            sharedProperties2.setSomeWord($scope.something);
        };


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

    })

.directive("otcDynamic", function($compile, sharedProperties2) {
    return {
        //template: "<button ng-click='doSomething()'>{{label}}</div"
        link: function(scope, element) {
            //element.html("<button ng-click='doSomething()'>{{label}}</div>");
            var template = " ";
            var i = 0;
            for (i = 0; i < sharedProperties2.getSomeWord().data.length; i++) {
                template += "<span ng-click=displaypubList(" + "wtf" + ") style=\"font-size: " + sharedProperties2.getSomeWord().data[i].Size + "px;\">" + sharedProperties2.getSomeWord().data[i].Word + "</span> ";
            }
            //template = "<div ng-repeat item in words> <span ng-click=displaypubList(item.Id) style=\"font-size: item.Size px\">item.Word ,"
            var linkFn = $compile(template);
            var content = linkFn(scope);
            element.append(content);
        }
    }
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