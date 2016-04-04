app.directive('logo', ['$location', function($location) {
	return {
		restrict: 'E',
		scope : {},
		templateUrl: 'shared/logo/logo.html',
		link: function (scope, element, attrs) {

            function goHome () {
				$location.path("/");
            }

            element.on('click', goHome);
        }
	}
}]);