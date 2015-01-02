'use strict'
getHiredModule.filter('enableRefineSearch',function(){
	return function(results,isFilterEnabled)
	{
		console.log("Here");
		if(isFilterEnabled)
		{
			return results;
		}
	}
});