var app = angular.module('blog',["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$routeProvider.when("/home", {
		templateUrl: "/home.html"
	});

	$routeProvider.when("/blogpost/:id", {
		templateUrl: "/blogpost.html"
	});

	$routeProvider.otherwise({
		templateUrl: "/home.html"
	});
});