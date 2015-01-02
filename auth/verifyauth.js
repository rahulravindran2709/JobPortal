var usermodel = require('../models/user');
/**
 * A simple middleware to restrict access to authenticated users.
 */
 exports.verifyUserAuth = function(req, res, next) {
	//query for user details
	if(!req.decodedToken)
	{
		res.send('Not authorized in verify user auth', 401);
	}
	console.log('Decoded token obtained'+req.decodedToken);
	usermodel.getUserByUserId(req.decodedToken.iss,function(error,user){
		console.log('User token received'+user.userid);
		if(error)
		{
			throw error;
		}
		if (!user) {
			res.send('Not authorized', 401);
		}	else {
			req.user=user;
			next();
		}


	});
	
}