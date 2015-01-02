getHiredModule.service('AuthService' ,['$http','RestCallbackHandlerService', function($http,RestCallbackHandlerService){

	this.authenticate=function(credentials)
	{
		var request = $http({method: "post",url: "/login",params: {action: "add"},data: $.param({'username': credentials.username,'password':credentials.password}) ,headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
		return request.success(RestCallbackHandlerService.handleSuccess).error(RestCallbackHandlerService.handleError);
	}

}]);