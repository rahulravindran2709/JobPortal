'use strict'
getHiredModule.service('FilterService', ['$http', function($http){

	this.getFilters=function(){

		return [ {filterName:'location',isFilterEnabled:false,filterValues:[{filterVal:'Hyderabad',isSelected:false},{filterVal:'Bangalore',isSelected:false}],isHidden:true},
	{filterName:'salary',isFilterEnabled:false,filterValues:[{filterVal:10000,isSelected:false},{filterVal:20000,isSelected:false},{filterVal:50000,isSelected:false},{filterVal:100000,isSelected:false},{filterVal:200000,isSelected:false}],isHidden:true},
	{filterName:'experience',isFilterEnabled:false,filterValues:[{filterVal:2,isSelected:false},{filterVal:3,isSelected:false},{filterVal:5,isSelected:false},{filterVal:8,isSelected:false},{filterVal:10,isSelected:false}],isHidden:true}];};
}]);