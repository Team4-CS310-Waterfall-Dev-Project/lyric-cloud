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
            .when('/word-cloud', {
                templateUrl: 'views/word-cloud.html',
                controller: 'WordCloudCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });