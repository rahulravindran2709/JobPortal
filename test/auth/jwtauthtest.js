var assert = require("assert"); // node.js core module
var proxyquire =  require('proxyquire');
var jwtauth = require('../../auth/jwtauth');
var moment = require('moment');
var util = require('util');
describe('JWTAuth', function(){
	describe('#encodeToken', function(){
		it('should return token value for valid username string', function(){
			var expires = moment().add(7,'days').valueOf();
			var token=jwtauth.encodeToken('Rahul',expires);
			assert.notEqual(null,token);
  });
		it('should throw error for null string', function(){
			assert.throws(function(){jwtauth.encodeToken(null,600);},Error);
  });
	});
	describe('#decodeToken',function(){
		it('should return username from valid token string',function(){
			var req={headers:[],body:{access_token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJSYWh1bCIsImV4cCI6MTQxMDAyODQ5MjA2Mn0.CPZjRxgsQLghhL627WVBHGbcPRgy8vQoFpGaAdaYC3I'}};
			var res={send:function(){},json:function(){}};
			jwtauth.decodeToken(req,res,function(){});
			assert.notEqual(req.decodedToken,null);
			assert.notEqual(req.decodedToken.iss,null);
			assert.equal(req.decodedToken.iss,'Rahul');
		});
	});
})