app.controller('crochetController',['$scope', 'projectsService', function($scope, projectsService){

	$scope.panel = projectsService.getProjects();

    $scope.hoverOn = function(){
        this.showTitle = true;
    };

    $scope.hoverOff = function(){
        this.showTitle = false;
    };

}]);