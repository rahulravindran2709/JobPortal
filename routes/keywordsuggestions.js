var locationModel = require('../models/jobs')
/*
 * GET users listing.
 */

exports.list = function(req, res){
	var suggestions=locationModel.getKeywordSuggestions(req.query.keyword,function(error,keywords){
		if (!error) {
            if (keywords) {
                console.log('Keywords matched'+keywords);
                res.json(200,keywords.map(function(cityobj){
                    return cityobj['jobtitle'];
                }));
            }
        }});
};