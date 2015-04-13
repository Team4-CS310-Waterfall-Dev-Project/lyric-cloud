'use strict';

/**
 * @ngdoc directive
 * @name lyricCloudApp.directive:wcAutocomplete
 * @description
 * # wcAutocomplete
 */
angular.module('lyricCloudApp')
    .directive('wcAutocomplete', function() {
        return {
            template: '<div></div>',
            restrict: 'EACM',
            link: function postLink(scope, element, attrs) {
                $(function() {
                    //TODO change to actual files
                    var availableTags = [
                        'ActionScript',
                        'AppleScript',
                        'Asp',
                        'BASIC',
                        'C',
                        'C++',
                        'Clojure',
                        'COBOL',
                        'ColdFusion',
                        'Erlang',
                        'Fortran',
                        'Groovy',
                        'Haskell',
                        'Java',
                        'JavaScript',
                        'Lisp',
                        'Perl',
                        'PHP',
                        'Python',
                        'Ruby',
                        'Scala',
                        'Scheme'
                    ];

                    $('#topic_title').autocomplete({
                        source: availableTags

                        //TODO change the source
                        //source: '/path/to/ajax_autocomplete.php',
                    });

                });
            }
        };
    });