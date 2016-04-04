var app = angular.module('blog',['ngRoute','ngSanitize']);

app.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$routeProvider.when("/home", {
		templateUrl: "/home.html",
		controller: "crochetController"
	});

	$routeProvider.when("/blogpost/:id", {
		templateUrl: "/blogpost.html",
		controller: "blogpostController"

	});

	$routeProvider.otherwise({
		templateUrl: "/home.html",
		controller: "crochetController"
	});
});