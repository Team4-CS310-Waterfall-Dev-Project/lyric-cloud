'use strict';

/**
 * @ngdoc overview
 * @name lyricCloudApp
 * @description
 * # lyricCloudApp
 *
 * Main module of the application.
 */
angular
  .module('lyricCloudApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/word-cloud', {
        templateUrl: 'views/word-cloud.html',
        controller: 'WordCloudCtrl'
      })
      .when('/song-list', {
        templateUrl: 'views/song-list.html',
        controller: 'SongListCtrl'
      })
      .when('/song-lyrics', {
        templateUrl: 'views/song-lyrics.html',
        controller: 'SongLyricsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
