(function(angular){
	'use strict';

	// Declare app level module which depends on views, and components
	angular.module('doubanApp', [
	  'ngRoute',
	  'doubanApp.in_theaters',
	  'doubanApp.coming_soon',
	  'doubanApp.top250'
	  /*'doubanApp.version'*/
	]).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/in_theaters'});
	}]);


})(angular);