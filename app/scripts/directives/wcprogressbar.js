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
                element.text('this is the wcProgressBar directive');

                function incrementProgress(barSelector, countSelector, incrementor) {
                    var bar = document.querySelectorAll(barSelector)[0].firstElementChild,
                        curWidth = parseFloat(bar.style.width),
                        newWidth = curWidth + incrementor;
                    if (newWidth > 100) {
                        newWidth = 0;
                    } else if (newWidth < 0) {
                        newWidth = 100;
                    }
                    bar.style.width = newWidth + '%';
                    document.querySelectorAll(countSelector)[0].innerHTML = newWidth.toFixed(1) + '%';
                }

                function incrementProgressLoop() {
                    incrementProgress('.progress-bar', '.progress-count', 0.5);
                    setTimeout(incrementProgressLoop, 100);
                }
                incrementProgressLoop();
            }
        };
    });