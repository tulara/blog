app.directive('hero', function() {
	return {
		restrict: 'E',
		scope : {
			title: '='
		},
		templateUrl: 'webapp/js/directives/hero.html'
	}
});