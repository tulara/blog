app.controller('blogpostController',['$scope', '$http', function($scope, $http){
	$http.get("shared/post/blogpostData.json")
		 .success(function(data){
		 	$scope.posts = data.posts;
		 });
}]);