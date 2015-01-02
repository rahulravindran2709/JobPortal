'use strict'
getHiredModule.controller('NavController', ['$scope','$rootScope', function($scope,$rootScope){
	
	$scope.$on('AuthSuccess',function(event,username){
		$scope.currentUser=username;
	})
	$scope.showLoginForm=function(){
		$rootScope.$broadcast('toggleLoginFormState');
	}
}]);