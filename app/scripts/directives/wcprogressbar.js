'use strict';

/**
 * @ngdoc directive
 * @name lyricCloudApp.directive:wcProgressBar
 * @description
 * # wcProgressBar
 */
angular.module('lyricCloudApp')
    .directive('wcProgressBar', function() {
        return {
            template: '<div></div>',
            restrict: 'EACM',
            link: function postLink(scope, element, attrs) {
                $(function() {

                    //call progress bar constructor           
                    $('#wordCloud').progressbar();
                });


                $('#wordCloud').mouseover(function() {

                    //display the current value
                    $('<p>').attr('id', 'percentage').text($('#wordCloud').progressbar('option', 'value') + '% complete').appendTo('body');
                });

                //set mouseout for progress bar
                $('#wordCloud').mouseout(function() {

                    //hide value
                    $('#percentage').remove();
                });
            }
        };
    });