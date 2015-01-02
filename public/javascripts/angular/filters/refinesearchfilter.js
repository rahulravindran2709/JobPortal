'use strict'
getHiredModule.filter('refineSearch',function(){
	return function(results,filters)
	{
		
		var filteredResults=JSLINQ(results).Where(function(item){
			var isMatched=true; 
			if(!filters||filters.length==0)
			{
				return true;
			}

				for (var currentFilterCriteria in filters) {
					if (filters.hasOwnProperty(currentFilterCriteria)) {
						var currentFilterValues=filters[currentFilterCriteria];
						if(!currentFilterValues)
						{
							continue;
						}
						isMatched=isMatched&&currentFilterValues.indexOf(item[currentFilterCriteria])!=-1;
					}
				}	
			return isMatched;
		});
		return filteredResults.ToArray();


	}
});

