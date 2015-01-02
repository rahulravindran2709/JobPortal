/**
 * Mongoose Model Object for User entity.Contains CRUD methods
 * for operating on user collection 
 * 
 * Examples:
 * 
 *     mymodule.addUser('Rahul','r@xyz.com','090708','someaddress',function(err,contact){});
 *	   Above code will add a contact with given details to mongodb
 *     mymodule.getUserByUserId('Rahul')
 *	   Above code will retrieve one contact by his user id

 */

 var db = require('../db/db');
 var UserSchema = new db.Schema({
 	name : String,
 	email : String,
 	phone : Number,
 	userid : {type : String ,unique : true},
 	password : String,
 	address : String
 });

 var UserEntity = db.mongoose.model('User',UserSchema);


//Exporting addContact
module.exports.addUser = addUser;
//Exporting getUserByUserId
module.exports.getUserByUserId = getUserByUserId;


function addUser(userid,email,phone,address,callback)
{
	var contact = new UserEntity();
	contact.userid = name;
	contact.email = email;
	contact.phone = phone;
	contact.address = address;
	contact.save(function(error)
	{
		if(error)
		{
			callback(error);
		}
		else
		{
			callback(null,contact);
		}
	}
	);


}
function getUserByUserId(userid,callback)
{
	//Pass empty search filter criteria to find to get all objects on User collection
	UserEntity.findOne({userid:userid},function(error,user)
	{
		

		if(error)
		{
			callback(error);
		}
		else
		{
			callback(null,user);
		}
	});
}