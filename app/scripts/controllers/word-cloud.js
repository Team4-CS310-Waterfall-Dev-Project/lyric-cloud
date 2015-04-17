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
        $scope.wordCloudGenerating = false;
        $scope.wordClicked = false;
        $scope.bar = $('.bar');
        //	$scope.word = sharedProperties2.getSomeWord();
        //        $scope.JSONvar = sharedProperties2.getSomeWord();

        //working code TODO remove comments
        $scope.words = [];

        //TODO change this to what I get from Hung
        //$scope.papers = [];
        $scope.papers = [{
                title: 'Software Stuff',
                authors: [
                    'Tom', 'Dick', 'Harry'
                ],
                date: new Date('2014', '10', '20'),
                journal: 'Jaba da Hut',
                conference: 'Jabba Hungry'
            }, {
                title: 'Software Stuff 2',
                authors: [
                    'Tom', 'Dick', 'Harry'
                ],
                date: new Date('2014', '10', '21'),
                journal: 'Jaba da Hut 2',
                conference: 'Jabba Hungry 2'
            }, {
                title: 'Software Stuff 3',
                authors: [
                    'Tom 3', 'Dick 3', 'Harry 3'
                ],
                date: new Date('2014', '10', '22'),
                journal: 'Jaba da Hut 3',
                conference: 'Jabba Hungry 3'
            }

        ];

        for ($scope.i = 0; $scope.i < sharedProperties2.getSomeWord().data.length; $scope.i++) {
            $scope.words[$scope.words.length] = {
                Id: $scope.i,
                Word: sharedProperties2.getSomeWord().data[$scope.i].Word,
                Size: sharedProperties2.getSomeWord().data[$scope.i].Size
            };
        }
        $scope.$watch('something', function(newVal, oldVal) {
            if (newVal === oldVal) return;
            $scope.resetProgressBar();
            console.log('setting new')
            sharedProperties2.setSomeWord($scope.something);
            $scope.wordCloudGenerating = false;
            console.log('wordCloudGenerating = false');
             for (var j = 0 ; j<sharedProperties2.getSomeWord().names.length; j++ )   {
				console.log(sharedProperties2.getSomeWord().names[j].Title );

			}   
            //TODO update progress bar to 100%

            $location.path('/word-cloud/');

        });
        //alert($scope.words[0].Id+ " " + $scope.words[0].Word + " "+$scope.words[0].Size);


        //called when the user presses submit
        $scope.newArtist = function(artistName) {
            $scope.artists = artistName;

            //change boolean to display progress bar
            $scope.wordCloudGenerating = true;
            console.log('wordCloudGenerating = true');

            $scope.startProgressBar();

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
            //  sharedProperties.setProperty($scope.artists);
            //    sharedProperties2.setSomeWord($scope.something);
        };


        $scope.startProgressBar = function() {
            //width is 618
            $scope.bar.width(0);

            var progress = setInterval(function() {

                if ($scope.bar.width() >= 600) {
                    clearInterval(progress);
                } else {
                    $scope.bar.width($scope.bar.width() + 60);
                }
                $scope.bar.text($scope.bar.width() / 6 + "%");
            }, 800);

        };

        $scope.resetProgressBar = function() {
            $scope.bar.width(600);
            $scope.bar.text('100%');
        };


        //called when a word is selected from the word cloud
        $scope.displaypubList = function(word) {
            $scope.currentpub = [word];
            sharedProperties.setCurrentpub($scope.currentpub);
            console.log($scope.currentpub);
            //$location.path('/pub-list');
            $scope.newArtist(word);
            $scope.wordClicked = true; //shows the table at the bottom
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
                template += "<span ng-click=displaypubList(\"" + sharedProperties2.getSomeWord().data[i].Word + "\") style=\"font-size: " + sharedProperties2.getSomeWord().data[i].Size + "px;\">" + sharedProperties2.getSomeWord().data[i].Word + "</span> ";
            }
            console.log(sharedProperties2.getSomeWord().names.length);
           
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