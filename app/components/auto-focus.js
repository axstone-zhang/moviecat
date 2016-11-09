(function (angular){

	angular.module('doubanApp.directives.auto_focus',[])
	.directive('autoFocus',['$location',function($location){

		return {
			template: '',
			restrict: 'A',
			link: function($scope,iElm,iAttrs,controller){
				/*console.log(iElm);
				console.log(iAttrs);*/
				$scope.$location = $location;
				$scope.$watch('$location.path()',function(now){
				//当path发生变化时执行，now是变化后的值 
					var aLink = iElm.children().attr('href');
					var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');

					if(now.startsWith(type)){
						iElm.parent().children().removeClass('active'); 
						iElm.addClass('active');
					}
				});

				/*//点击事件
				iElm.on('click',function(){
					iElm.parent().children().removeClass('active'); 
					iElm.addClass('active');
				})*/
			}
		}
	}])
})(angular);