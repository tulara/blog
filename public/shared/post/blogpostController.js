app.controller('blogpostController',['$scope', 'projectsService','$route', '$routeParams', '$location',
	function($scope, projectsService, $route, $routeParams, $location){

	$scope.$on("$routeChangeSuccess", function(){
		if($location.path().indexOf("/blogpost") == 0){
			var id = $routeParams["id"];
			$scope.project = projectsService.getProjectById(id);
		}
	});
}]);