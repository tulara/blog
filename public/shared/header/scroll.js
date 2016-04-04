app.directive('scroll', function($window){
	return function(scope, element, attrs) {
		angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 208 & $window.innerWidth > 640) {
                 scope.headerIsMinimised = true;
             } else {
                 scope.headerIsMinimised = false;
             }
            scope.$apply();
		});
	}

});