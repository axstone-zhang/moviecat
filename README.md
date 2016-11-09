# 豆瓣电影 angularjs

## step-01
-克隆项目骨架

```bash
$ git clone --depth=1 https://github.com/zce/angular-boilerplate.git moviecat
$ cd moviecat
```

- 安装项目依赖

```bash
$ bower install bootstrap --save

```

```
.editorconfig -- 统一不同开发者的不同开发工具的不同开发配置
在Sublime中使用需要安装一個EditorConfig的插件 
```

- 為NG做一个项目骨架的目的是为了快速开始一个新的项目
-angular-seed
- 

npm 在package.json 中的script节点中可以定义脚本任务，

API的概念：
应用程序编程接口


## step-02 抽象数据成员，以假数据的方式设计控制器和视图


## step-03 图片链接数据绑定BUG

-跨域问题 支持跨域的对象
<!-- 统计链接，支持跨域但是无法实现获取服务器端返回的数据 -->
 <img src="http://www.baidu.com"/>
 <!-- 支持，可以接收服务器端数据，但是过程复杂 -->
 <iframe src="http://www.baidu.com"></iframe>
 <!-- 会在css处理阶段报错 -->
 <link rel="stylesheet"  href="http://www.baidu.com">
 <!-- 全局函数 -->
 <script  src="http://www.baidu.com"></script>

## step-04 豆瓣API介绍，加入$http服务对象完成AJAX请求数据


 ```
 function callback (data){
 	console.log(data);
 }

 需要是全局 让其他的调用
 window。angular = {}；
 angular.callback = {};
 angular.callback._0 = function(){

 }

 jquery的方法
 function jquery_isonp11292345(arguments){
 
 }
 ```
 -在angular中使用JSONP的方法做跨域请求，就必须给当前地址加一个参数callback=JSON_CALLBACk,
 最后JSON_CALLBACk会替换成一个随机的数
 ```
 $http.jsonp(address+'?callback=JSON_CALLBACK');
 但是这里 豆瓣API不能用
 ```

## 学习到的知识
-数组元素的字符串化
```
arrayObj.join(separator); //返回字符串，这个字符串将数组的每一个元素值连接在一起，中间用 separator 隔开。
toLocaleString() 、toString() 、valueOf()：可以看作是join的特殊用法,也可以实现相同效果
```
-手写jsonp
```
(function(window,document,undefined){
	'use strict';
	var jsonp = function(url,data,callback){
		//1.挂载回调函数
		var fnSuffix = Math.random().toString().replace('.','');
		var cbFuncName = 'my_json_cb_' + fnSuffix;
		window[cbFuncName] = callback;

		//2.将data转换为url字符串的形式 {id:1,name:'zhangshan'} => id=1&name=zhangshan

		var querystring = url.indexOf('?') == -1 ? '?':'';//判断url中是否有？
		for(var key in data){
			querystring += key + '=' + data[key] + '&'; //querystring=?id=1&name=zhangshan&
		};

		//3.处理url中的回调参数
		//url += callback=sdsfdsg
		querystring += 'callback=' + cbFuncName;
		//querystring=?id=1&name=zhangshan&cb=my_json_cb_02132817213

		//4.创建一个script标签
		var scriptElement = document.createElement('script');
		scriptElement.src = url + querystring;
		//注意此时还不能将其安排碰上到页面上

		
		//5.将script标签放在页面中
		document.body.appendChild(scriptElement);
		//append过后页面会自动对地址发送请求，请求完成以后自动执行

	};

	window.$jsonp = jsonp;

})(window,document);
```
-$apply(); 
由于加载出的内容没有渲染到页面上，所有用$apply()重新渲染一下页面

