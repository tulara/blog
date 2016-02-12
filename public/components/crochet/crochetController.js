app.controller('crochetController',['$scope', 'projectsService', function($scope, projectsService){

	$scope.panel = projectsService.getProjects();

}]);