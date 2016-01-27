app.directive('hero', function() {
	return {
		restrict: 'E',
		scope : {
			title: '='
		},
		templateUrl: 'js/directives/hero.html'
	}
});