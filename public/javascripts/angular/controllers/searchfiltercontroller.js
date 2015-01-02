'use strict'
getHiredModule.controller('SearchFilterController', ['$scope','FilterService',function($scope,FilterService){
	$scope.selectedFilters={};
	$scope.filters=FilterService.getFilters();
	$scope.toggleGlyphiconState = function($index){
		$scope.filters[$index].isHidden=!$scope.filters[$index].isHidden;
	}
	$scope.toggleFilterSelection = function(filterName,filterValue)
	{
		$scope.selectedFilters[filterName];
		if(!$scope.selectedFilters[filterName])
		{
			$scope.selectedFilters[filterName]=[];
		}
		if(!filterValue)
		{
			return;
		}
		if(filterValue.isSelected)
		{
			if($scope.selectedFilters[filterName].indexOf(filterValue.filterVal)==-1)
			{
				$scope.selectedFilters[filterName].push(filterValue.filterVal);
			}
		}
		else
		{
			var pos=$scope.selectedFilters[filterName].indexOf(filterValue.filterVal);
			if(pos!=-1)
			{
				$scope.selectedFilters[filterName].splice(pos,1);
			}
			if($scope.selectedFilters[filterName].length==0)
			{
				delete $scope.selectedFilters[filterName];
			}

		}
		$scope.$emit('filterRefresh',$scope.selectedFilters);
	}

}]);