
(function(angular){
	'use strict';

	//由于默认angular提供的异步请求对象不支持自定义回调函数名
	//angular随机分配的回调函数名称不被豆瓣支持
	var http=angular.module('myApp.services.http',[]);
	http.service('HttpService',['$window','$document',function($window,$document){
		//url:http://api.douban.com/vsdfsdf -><script> ->html就可以执行

		this.jsonp = function(url,data,callback){
			if(typeof data == 'function'){
				callback = data;
			};

			var querystring = url.indexOf('?') == -1 ? '?':'';//判断url中是否有？
			for(var key in data){
				querystring += key + '=' + data[key] + '&'; //querystring=?id=1&name=zhangshan& 拼接url
			};

			var fnSuffix = Math.random().toString().replace('.',''); //把随机函数中的.去掉
			var cbFuncName = 'my_json_cb_' + fnSuffix; //定义前缀
			
			querystring += 'callback=' + cbFuncName;

			var scriptElement = $document[0].createElement('script');
			scriptElement.src = url + querystring;

			$window[cbFuncName] = function(data){
				callback(data);
				$document[0].body.removeChild(scriptElement);
				//防止页面中多个scripeElement
			} 

			$document[0].body.appendChild(scriptElement);

		};
	}]);
})(angular);