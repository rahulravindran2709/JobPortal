getHiredModule.service('SearchService', ['$http','RestCallbackHandlerService','$q', function($http,RestCallbackHandlerService,$q){
	this.getResults=function()
	{
		var resultsPromise=$http({method: "get",url: "/search",params: {action: "get" }});
		return resultsPromise.then(RestCallbackHandlerService.handleSuccess,RestCallbackHandlerService.handleError);
	}
	this.searchJobs=function()
	{
		var resultsPromise=$http({method: "get",url: "/search",params: {action: "get" }});
		return resultsPromise.then(RestCallbackHandlerService.handleSuccess,RestCallbackHandlerService.handleError);
	}

}]);