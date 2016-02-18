app.controller('blogpostController',['$scope', 'projectsService', function($scope, projectsService){
	$scope.projects = projectsService.getProjects();
}]);