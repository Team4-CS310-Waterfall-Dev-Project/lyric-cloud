'use strict';

/**
 * @ngdoc overview
 * @name researchCloudApp
 * @description
 * # researchCloudApp
 *
 * Main module of the application.
 */
angular
  .module('researchCloudApp', [
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
      .when('/pub-list', {
        templateUrl: 'views/pub-list.html',
        controller: 'pubListCtrl'
      })
      .when('/pub-researchs', {
        templateUrl: 'views/pub-researchs.html',
        controller: 'pubresearchsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
