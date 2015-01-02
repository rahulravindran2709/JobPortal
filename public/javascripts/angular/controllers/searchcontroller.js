'use strict'
getHiredModule.controller('SearchController', ['$scope','SearchService','$filter','$location', function($scope,SearchService,$filter,$location){
	$scope.startRow=1;
	$scope.endRow=2;
	$scope.pages=[1,2,3];
	$scope.resultsInPage=1;
	$scope.isFiltersEnabled=false;
	$scope.unfilteredResults=[];
	$scope.resultCount=$scope.unfilteredResults.length;
	$scope.searchQuery={searchKeyword:'',location:'',jobTitle:''};
	$scope.searchJobs=function(searchQuery){
		if(!searchQuery)
		{
			return false;
		}
		SearchService.searchJobs().then(function(results){
		$location.path('/jobsearchresults');
		$scope.unfilteredResults=results;
		$scope.resultCount=$scope.unfilteredResults.length;
		displaySearchResults(results);
	});
	};
	var displaySearchResults=function(results,filters)
	{
		if(!filters)
		{
			$scope.filteredResults=results;
		}
		$scope.filteredResults=$filter('refineSearch')(results,filters);
		
	};
	
	$scope.$on('filterRefresh',function(event,filters){
		displaySearchResults($scope.unfilteredResults,filters);
	});
}]);