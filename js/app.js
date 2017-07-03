var app = angular.module('multipageApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'index.html'
		})
		.when('/about', {
			templateUrl: 'views/about.html'
		})
		.when('/works', {
			templateUrl: 'views/works.html'
		})
		.otherwise ({
			redirectTo: '/'
		})
})