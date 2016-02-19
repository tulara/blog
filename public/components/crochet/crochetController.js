app.controller('crochetController',['$scope', 'projectsService', '$location',
 function($scope, projectsService, $location){
	$scope.panel = projectsService.getProjects();

	$scope.goToProject = function(id){
		$location.path("/blogpost/"+ id);
	}
}]);