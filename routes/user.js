var passport = require('passport');


exports.getlogin = function(req, res) {
  //res.render('login', { user: req.user, message: req.session.messages });
};

// POST /login
//   This is an alternative implementation that uses a custom callback to
//   acheive the same functionality.
exports.postlogin = function(req, res, next) {
  console.log("In POST");
  passport.authenticate('local', function(err, user, info) {
    if (err) {console.log('Error'); return next(err) }
    console.log(info);
    if (!user) {
      req.session.messages =  [info.message];
      return res.redirect('/login')
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/');
    });
  })(req, res, next);
};

exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};
