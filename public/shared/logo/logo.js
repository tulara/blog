app.directive('logo', ['$location', function($location) {
	return {
		restrict: 'E',
		scope : {},
		templateUrl: 'shared/logo/logo.html',
		link: function (scope, element, attrs) {

            function goHome () {
				$location.path("/");
				scope.$apply()
            };

            element.on('click', goHome);
        }
	}
}]);