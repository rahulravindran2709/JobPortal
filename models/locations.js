 var db = require('../db/db');
 var locationSchema = new db.Schema({geoname_id: Number,
	continent_code: String,
	continent_name: String,
	country_iso_code: String,
	country_name: String,
	subdivision_iso_code: String,
	subdivision_name: String,
	city_name: String  
 });



  var LocationsEntity = db.mongoose.model('Locations',locationSchema);

  exports.getCitySuggestions = function(keyword,callback){
  	//Pass empty search filter criteria to find to get all objects on User collection
	LocationsEntity.find({city_name:new RegExp(keyword, "i")},{ '_id': 0, 'city_name' :1},function(error,cities)
	{
		if(error)
		{
			callback(error);
		}
		else
		{
			callback(null,cities);
		}
	});
  };