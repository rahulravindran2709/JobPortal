
/*
 * GET users listing.
 */

exports.list = function(req, res){
	
	var output =[{jobTitle:'Java Developer',company:'CTS',location:'Hyderabad',postedDate:'Today',salary:10000,experience:2},
	{jobTitle:'.NET developer',company:'Infosys',location:'Bangalore',postedDate:'Today',salary:20000,experience:3}];
  res.json(output);
};