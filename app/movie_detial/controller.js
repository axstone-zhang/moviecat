(function(angular){
	'use strict';

	angular.module('doubanApp.movie_detial', ['ngRoute','myApp.services.http'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/detial/:id', {
		templateUrl: 'movie_detial/view.html',
		controller: 'MovieDetialCtrl'
	  });
	}])

	.controller('MovieDetialCtrl', ['$scope','$route','$routeParams','HttpService','AppConfig',function($scope,$route,$routeParams,HttpService,AppConfig) {
		
		$scope.movie = {};
		var id = $routeParams.id;

		var apiAddress = AppConfig.detialApiAddress + id;
		
		//跨域的方式
		HttpService.jsonp(apiAddress,{},function(data){			
			$scope.movie = data;
			$scope.$apply();
				
		});
		
	}]);


})(angular);
