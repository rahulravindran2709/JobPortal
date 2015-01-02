var usermodel = require('../models/user');
var jwt = require('jwt-simple');
var jwtauth = require('../auth/jwtauth');
var moment = require('moment');
module.exports.login=function(req,res,next){
	try
	{
		usermodel.getUserByUserId(req.body.username,function(error,user)
		{
			if(error)
			{
				throw error;
			}
			if(!user||!user.userid)
			{
				res.status(401);
				res.json({message:'Not authorized'});
				return;
			}
			var expires = moment().add(7,'days').valueOf();
			
			var password=user.password;
			if(password!==req.body.password)
			{
				res.status(401);
				res.json({message:'Not authorized'});
				return;
			}
			var token=jwtauth.encodeToken(user.userid,expires);
			var userToken= {};
			userToken.username=user.userid;
			userToken.email=user.email;
			userToken.name=user.name;
			res.json({
				token : token,
				expires: expires,
				user: userToken});
		});
	}
	catch(Error){	
		console.log('Error in getting user'+Error);
	}

} ;