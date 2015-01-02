/*
 * GET users listing.
 */
var locationModel = require('../models/locations')
exports.list = function(req, res) {
    /*var suggestions=['Bangalore','Hyderabad','Chennai','Delhi'];
		var filtered=suggestions.filter(function(element){

						return element.toLowerCase().indexOf(req.query.keyword.toLowerCase())!=-1;

				});*/
    locationModel.getCitySuggestions(req.query.keyword, function(error, cities) {
        if (error) {
            res.json(500, {
                message: 'No cities matched'
            });

        } else {
            if (cities) {
                console.log('Cities matched'+cities);
                res.json(200,cities.map(function(cityobj){
                    return cityobj['city_name'];
                }));
            }
        }
    });

};
