var jwt = require('jwt-simple');
var util = require('util');
var usermodel = require('../models/user');
exports.decodeToken=function(req,res,next)
{
	var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
	console.log('Value of token received'+token);
	if (token) 
	{
		try {
			var decoded = jwt.decode(token, 'mysecret');
			if (decoded.exp <= Date.now()) {
				res.end('Access token has expired', 400);
			}
			
			req.decodedToken=decoded;
			next();
		}
		catch (err) 
		{
			return next();
		}
	} else
	{
		next();
	}
}
exports.encodeToken=function(userid,expires){
	if(!userid)
	{
		throw new Error('No user id was passed'); 
	}
	var token = jwt.encode({iss: userid,exp: expires}, 'mysecret');
	return token;
}