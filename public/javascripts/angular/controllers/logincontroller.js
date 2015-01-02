getHiredModule.controller('LoginController', ['$scope','AuthService','$window','$rootScope', function($scope,AuthService,$window,$rootScope){
	console.log("In login controller login");
	$scope.credentials={username:"",password:""};
	$scope.isModalHidden=true;
	$scope.$on('toggleLoginFormState',function(){
		$scope.isModalHidden=!$scope.isModalHidden;
	});
	$scope.login=function(credentials){
		AuthService.authenticate(credentials).then(function(results){
			
			$window.sessionStorage.token = results.data.token;
        	$scope.message = 'Welcome';
        	$rootScope.$broadcast('toggleLoginFormState');
        	$rootScope.$broadcast('AuthSuccess',credentials.username);
		},function(error){
			console.log("Error"+angular.toJson(error));
			// Erase the token if the user fails to log in
        	delete $window.sessionStorage.token;

	});
	}
}]);