var lyricFloatApp = angular.module(
	'lyricFloat',
	[
        'ngRoute',
		//ModuleInsertReference
	]
);
lyricFloatApp.config([
	'$routeProvider',
	function($routeProvider) {
        $routeProvider.
        	when("/", {templateUrl: '/partials/index.html'}); //RouteInsertReference
	}
]);
