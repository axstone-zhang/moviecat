(function(angular){
	'use strict';

	var data = [
			{
	      "rating": {
	        "max": 10,
	        "average": 4.5,
	        "stars": "25",
	        "min": 0
	      },
	      "genres": [
	        "恐怖",
	        "古装"
	      ],
	      "title": "育婴室",
	      "casts": [
	        {
	          "alt": "https://movie.douban.com/celebrity/1316703/",
	          "avatars": {
	            "small": "http://img3.doubanio.com/img/celebrity/small/1421138015.79.jpg",
	            "large": "http://img3.doubanio.com/img/celebrity/large/1421138015.79.jpg",
	            "medium": "http://img3.doubanio.com/img/celebrity/medium/1421138015.79.jpg"
	          },
	          "name": "邱敏敏",
	          "id": "1316703"
	        },
	        {
	          "alt": "https://movie.douban.com/celebrity/1318883/",
	          "avatars": {
	            "small": "http://img7.doubanio.com/img/celebrity/small/1469384955.41.jpg",
	            "large": "http://img7.doubanio.com/img/celebrity/large/1469384955.41.jpg",
	            "medium": "http://img7.doubanio.com/img/celebrity/medium/1469384955.41.jpg"
	          },
	          "name": "朱一龙",
	          "id": "1318883"
	        },
	        {
	          "alt": "https://movie.douban.com/celebrity/1315812/",
	          "avatars": {
	            "small": "http://img7.doubanio.com/img/celebrity/small/39261.jpg",
	            "large": "http://img7.doubanio.com/img/celebrity/large/39261.jpg",
	            "medium": "http://img7.doubanio.com/img/celebrity/medium/39261.jpg"
	          },
	          "name": "徐洁儿",
	          "id": "1315812"
	        }
	      ],
	      "collect_count": 373,
	      "original_title": "育婴室",
	      "subtype": "movie",
	      "directors": [
	        {
	          "alt": "https://movie.douban.com/celebrity/1327529/",
	          "avatars": {
	            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
	            "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
	            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
	          },
	          "name": "皮查农·塔玛杰拉",
	          "id": "1327529"
	        }
	      ],
	      "year": "2016",
	      "images": {
	        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2372301645.jpg",
	        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2372301645.jpg",
	        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2372301645.jpg"
	      },
	      "alt": "https://movie.douban.com/subject/26318896/",
	      "id": "26318896"
	    },
	    {
	      "rating": {
	        "max": 10,
	        "average": 6.1,
	        "stars": "30",
	        "min": 0
	      },
	      "genres": [
	        "剧情",
	        "动作",
	        "犯罪"
	      ],
	      "title": "侠探杰克：永不回头",
	      "casts": [
	        {
	          "alt": "https://movie.douban.com/celebrity/1054435/",
	          "avatars": {
	            "small": "http://img3.doubanio.com/img/celebrity/small/567.jpg",
	            "large": "http://img3.doubanio.com/img/celebrity/large/567.jpg",
	            "medium": "http://img3.doubanio.com/img/celebrity/medium/567.jpg"
	          },
	          "name": "汤姆·克鲁斯",
	          "id": "1054435"
	        },
	        {
	          "alt": "https://movie.douban.com/celebrity/1000018/",
	          "avatars": {
	            "small": "http://img7.doubanio.com/img/celebrity/small/27133.jpg",
	            "large": "http://img7.doubanio.com/img/celebrity/large/27133.jpg",
	            "medium": "http://img7.doubanio.com/img/celebrity/medium/27133.jpg"
	          },
	          "name": "寇碧·史莫德斯",
	          "id": "1000018"
	        },
	        {
	          "alt": "https://movie.douban.com/celebrity/1010576/",
	          "avatars": {
	            "small": "http://img3.doubanio.com/img/celebrity/small/1238.jpg",
	            "large": "http://img3.doubanio.com/img/celebrity/large/1238.jpg",
	            "medium": "http://img3.doubanio.com/img/celebrity/medium/1238.jpg"
	          },
	          "name": "罗伯特·克耐普",
	          "id": "1010576"
	        }
	      ],
	      "collect_count": 7455,
	      "original_title": "Jack Reacher: Never Go Back",
	      "subtype": "movie",
	      "directors": [
	        {
	          "alt": "https://movie.douban.com/celebrity/1027877/",
	          "avatars": {
	            "small": "http://img7.doubanio.com/img/celebrity/small/10780.jpg",
	            "large": "http://img7.doubanio.com/img/celebrity/large/10780.jpg",
	            "medium": "http://img7.doubanio.com/img/celebrity/medium/10780.jpg"
	          },
	          "name": "爱德华·兹威克",
	          "id": "1027877"
	        }
	      ],
	      "year": "2016",
	      "images": {
	        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2382529090.jpg",
	        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2382529090.jpg",
	        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2382529090.jpg"
	      },
	      "alt": "https://movie.douban.com/subject/25789402/",
	      "id": "25789402"
	    },
	    {
	      "rating": {
	        "max": 10,
	        "average": 4.6,
	        "stars": "25",
	        "min": 0
	      },
	      "genres": [
	        "喜剧"
	      ],
	      "title": "小明和他的小伙伴们",
	      "casts": [
	        {
	          "alt": "https://movie.douban.com/celebrity/1316368/",
	          "avatars": {
	            "small": "http://img7.doubanio.com/img/celebrity/small/1473410979.5.jpg",
	            "large": "http://img7.doubanio.com/img/celebrity/large/1473410979.5.jpg",
	            "medium": "http://img7.doubanio.com/img/celebrity/medium/1473410979.5.jpg"
	          },
	          "name": "乔杉",
	          "id": "1316368"
	        },
	        {
	          "alt": "https://movie.douban.com/celebrity/1362516/",
	          "avatars": {
	            "small": "http://img3.doubanio.com/img/celebrity/small/1474529068.86.jpg",
	            "large": "http://img3.doubanio.com/img/celebrity/large/1474529068.86.jpg",
	            "medium": "http://img3.doubanio.com/img/celebrity/medium/1474529068.86.jpg"
	          },
	          "name": "许君聪",
	          "id": "1362516"
	        },
	        {
	          "alt": "https://movie.douban.com/celebrity/1362518/",
	          "avatars": {
	            "small": "http://img7.doubanio.com/img/celebrity/small/1474529389.5.jpg",
	            "large": "http://img7.doubanio.com/img/celebrity/large/1474529389.5.jpg",
	            "medium": "http://img7.doubanio.com/img/celebrity/medium/1474529389.5.jpg"
	          },
	          "name": "费伟妮",
	          "id": "1362518"
	        }
	      ],
	      "collect_count": 322,
	      "original_title": "小明和他的小伙伴们",
	      "subtype": "movie",
	      "directors": [
	        {
	          "alt": "https://movie.douban.com/celebrity/1362489/",
	          "avatars": {
	            "small": "http://img7.doubanio.com/img/celebrity/small/1474427452.72.jpg",
	            "large": "http://img7.doubanio.com/img/celebrity/large/1474427452.72.jpg",
	            "medium": "http://img7.doubanio.com/img/celebrity/medium/1474427452.72.jpg"
	          },
	          "name": "王鑫",
	          "id": "1362489"
	        }
	      ],
	      "year": "2016",
	      "images": {
	        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2382206861.jpg",
	        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2382206861.jpg",
	        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2382206861.jpg"
	      },
	      "alt": "https://movie.douban.com/subject/26869052/",
	      "id": "26869052"
	    }
	  ];

	angular.module('doubanApp.in_theaters', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/in_theaters', {
	    templateUrl: 'in_theaters/view.html',
	    controller: 'InTheatersCtrl'
	  });
	}])

	.controller('InTheatersCtrl', ['$scope',function($scope) {
		
		$scope.subjects = data;
		console.log($scope.subjects);
	}]);


})(angular);