(function(angular){
	'use strict';

	angular.module('doubanApp.movie_list', ['ngRoute','myApp.services.http'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/:category/:page', {
		templateUrl: 'movie_list/view.html',
		controller: 'MovieListCtrl'
	  });
	}])

	.controller('MovieListCtrl', ['$scope','$route','$routeParams','HttpService','AppConfig',function($scope,$route,$routeParams,HttpService,AppConfig) {
		
		$scope.loading = true;

		var page = parseInt($routeParams.page); //
		var count = AppConfig.pageSize;
		var start = (page-1)*10;
		$scope.currentPage = page;

		$scope.subjects = [];
		$scope.message = '';
		$scope.totalCount = 0;
		$scope.totalPages = 0;
		$scope.title = "loading...";
		
		HttpService.jsonp(
			AppConfig.listApiAddress + $routeParams.category,
			{start: start, count: count,q:$routeParams.q},
			function(data){
			
				$scope.loading = false;//进度条隐藏
				$scope.title = data.title;

				$scope.totalCount = data.total;
				$scope.totalPages = Math.ceil($scope.totalCount / count);//向上取整
				$scope.subjects = data.subjects;
				$scope.$apply(); //$apply将所有值都同步一下

				//暴露上一个下一页的行为
				$scope.go = function(page){
					//传过来的第几页 就跳到第几页
					//
					if(page >= 1 && page <= $scope.totalPages){
						$route.updateParams({page: page});
					}
					
				};
			}
		);
		
	}]);


})(angular);

	/*var doubanApiAddress = 'http://api.douban.com/v2/movie/in_theaters';

	$http.jsonp(doubanApiAddress).then(function(res){
		if(res.status==200){
			$scope.subjects = res.data.subjects;
		}else{
			$scope.message = '获取数据错误,'+res.statusText;
		}
		
	},function(err){
		$scope.message = '获取数据错误,'+err.statusText;
	});*/