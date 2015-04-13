'use strict';

/**
 * @ngdoc function
 * @name lyricCloudApp.controller:WordCloudCtrl
 * @description
 * # WordCloudCtrl
 * Controller of the lyricCloudApp
 */
angular.module('lyricCloudApp')
    .controller('WordCloudCtrl', function($scope, $sce, $location, sharedProperties, sharedProperties2, $compile) {
        $scope.artists = sharedProperties.getProperty();
        //	$scope.word = sharedProperties2.getSomeWord();
        //        $scope.JSONvar = sharedProperties2.getSomeWord();
        
          //working code TODO remove comments
         $scope.words = [];
        for ($scope.i = 0; $scope.i < sharedProperties2.getSomeWord().data.length; $scope.i++) {
           $scope.words[$scope.words.length] = {Id: $scope.i, Word: sharedProperties2.getSomeWord().data[$scope.i].Word, Size: sharedProperties2.getSomeWord().data[$scope.i].Size};
          }
     //alert($scope.words[0].Id+ " " + $scope.words[0].Word + " "+$scope.words[0].Size);

         $scope.wordCloudStuff = function(){
          //  for ($scope.i = 0; $scope.i < sharedProperties2.getSomeWord().data.length; $scope.i++) {
          //    $scope.word += "<span ng-click=displaypubList(" +sharedProperties2.getSomeWord().data[$scope.i].Word + ") style=\"font-size: " + sharedProperties2.getSomeWord().data[$scope.i].Size + "px;\">" + sharedProperties2.getSomeWord().data[$scope.i].Word + "</span> ";
         // }
        // $scope.word = "<p>hello</p>";
        //  return $scope.$sce.trustAsHtml($scope.word);  
         return $sce.trustAsHtml($scope.word);  
        };
  
        //called when pressing submit -- can be taken out
        $scope.displayWordCloud = function() {
            $location.path('/word-cloud/');
        };

        //called when a word is selected from the word cloud
        $scope.displaypubList = function(word) {
            $scope.currentpub = [word];
            alert(word);
            sharedProperties.setCurrentpub($scope.currentpub);
            $location.path('/pub-list');

            console.log($scope.currentpub);
        };

        //called when the user presses submit
        $scope.newartist = function(artistName) {
            $scope.artists = [artistName];
            sharedProperties.setProperty($scope.artists);
            //TODO call php to display word cloud

            console.log($scope.artists);
        };

        //called when the user presses add to word cloud
        $scope.addartist = function(artistName) {
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

.directive("otcDynamic", function( $compile, sharedProperties2){
	return{
		//template: "<button ng-click='doSomething()'>{{label}}</div"
		link: function(scope, element){
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