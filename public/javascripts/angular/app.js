var getHiredModule = angular.module('getHiredApp', ['ngRoute','ngAnimate']);
getHiredModule.config(['$httpProvider','$routeProvider',function($httpProvider,$routeProvider) {
	$httpProvider.interceptors.push('authInterceptor');


	//Routes
	$routeProvider.
      when('/', {
        templateUrl: 'templates/landingpage'
      }).
      when('/jobsearchresults', {
        templateUrl: 'templates/searchmain',
      }).
      otherwise({
        redirectTo: '/'
      });
}]);

