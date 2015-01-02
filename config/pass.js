var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
	console.log(user+" is the username");
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	console.log(id+" is the username");
    done(err, user);
});

passport.use(new LocalStrategy(function(username, password, done) {
	console.log(username+" is the username");
	done(username,password);
}));

// Simple route middleware to ensure user is authenticated.  Otherwise send to login page.
exports.ensureAuthenticated = function ensureAuthenticated(req, res, next) {
	console.log('ensureAuthenticated');
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
