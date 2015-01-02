 var db = require('../db/db');
 var jobsSchema = new db.Schema({
     jobtitle: String,
     company: String,
     city: String,
     state: String,
     country: String,
     formattedLocation: String,
     source: String,
     snippet: String,
     url: String,
     jobkey: String,
     formattedLocationFull: String,
     formattedRelativeTime: String
 });



  var JobsEntity = db.mongoose.model('Jobs',jobsSchema);

//Exporting getUserByUserId
module.exports.getKeywordSuggestions = function(keyword,callback){
     JobsEntity.find({jobtitle:new RegExp(keyword, "i")}).distinct('jobtitle').exec(function(error,keywords){
          if(error)
          {
               callback(error);
          }
          else
          {
               callback(null,keywords);
          }
     });
};
