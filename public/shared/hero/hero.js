app.directive('hero', function() {
	return {
		restrict: 'E',
		scope : {
			title: '='
		},
		templateUrl: 'shared/hero/hero.html'
	}
});