var app = angular.module("todoApp", ['ngRoute', '$routeProvider', '$locationProvider']);

app
	.config(function($routeProvider, $locationProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainCtrl'
		})
		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdCtrl'
		});
	
	$locationProvider.html5Mode(true);
});
