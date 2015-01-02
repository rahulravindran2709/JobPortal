/**
 *Manages connections to mongodb through mongoose
 *
*/

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;


module.exports.Schema = Schema;
module.exports.mongoose = mongoose;
var address = 'mongodb://localhost:27017/jobportaldb';
connect();


//make a connection to mongo


function connect()
{
	mongoose.connect(address);
}
function disconnect()
{
	mongoose.disconnect();
}