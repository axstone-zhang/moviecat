(function(angular){
	'use strict';

	// Declare app level module which depends on views, and components
	angular.module('doubanApp', [
	  'ngRoute',
	  'doubanApp.movie_detial',
	  'doubanApp.movie_list',
	  'doubanApp.directives.auto_focus'
	  /*'doubanApp.version'*/
	])
	// 为模块定义一些常量
	.constant('AppConfig',{
		pageSize: 10,
		listApiAddress: 'http://api.douban.com/v2/movie/',
		detialApiAddress: 'http://api.douban.com/v2/movie/subject/'
	})
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
	}])
	.controller('SearchCtrl',['$scope','$route',function($scope,$route){
		$scope.searchText = '';//输入的搜索文字
		$scope.search = function(){
			// $route.updateParams获取当前url 然后添加到后面 更新
			$route.updateParams({category:'search', q:$scope.searchText});

		};
	}]);
	/*.controller('NavCtrl', ['$scope','$location',function($scope,$location){
		$scope.$location = $location;
		$scope.$watch('$location.path()',function(now){
			if(now.startsWith('/in_theaters')){
				$scope.type = 'in_theaters';
			}else if(now.startsWith('/coming_soon')){
				$scope.type = 'coming_soon';
			}else if(now.startsWith('/top250')){
				$scope.type = 'top250';
			}
		});
	}]);*/

})(angular);