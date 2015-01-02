//Requires start
var express = require('express');
var path = require('path');
var util = require('util');
var jwt = require('jwt-simple');
var morgan  = require('morgan')
var routes = require('./routes');
var jwtauth = require('./auth/jwtauth');
var verifyAuth = require('./auth/verifyauth');
var login = require('./routes/login');
var searchresults = require('./routes/searchresults');
var keywordsuggestions = require('./routes/keywordsuggestions');
var locationsuggestions = require('./routes/locationsuggestions');
var flash = require('connect-flash');
var bunyan = require('bunyan');
//Requires end
//Configuring logger
var logger = bunyan.createLogger({name: 'myapp'});
var inspectElem=function(object){
	return util.inspect(object, { showHidden: true, depth: 4 });
};

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
//app.use(express.logger('dev'));
app.use(morgan('tiny'))
app.use(express.cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.set('jwtTokenSecret', 'mysecret');
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
	res.render('index', { user: req.user });
});
app.get('/templates/:templateName', function(req, res){
	 var name = req.params.templateName;
	res.render(name);
})
app.get('/search', [express.bodyParser(), jwtauth.decodeToken,verifyAuth.verifyUserAuth],searchresults.list);
app.get('/login', function(req, res){
	res.render('index');
});
app.get('/suggestions/keywords',keywordsuggestions.list );
app.get('/suggestions/locations',locationsuggestions.list );
app.post('/login',login.login);
  // route to log out 
  app.post('/logout', function(req, res){ req.logOut(); res.send(200); });

  app.listen(3000, function() {
  	console.log('Express server listening on port 3000');
  });



