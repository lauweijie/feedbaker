'use strict';

var passport = require('passport');

/**
 * Start OpenID Authentication
 */
exports.start = function (req, res, next) {
  req.session.loginRedirect = undefined;
  if(req.query.redirectTo !== undefined && req.query.redirectTo.indexOf(":") === -1) {
    req.session.loginRedirect = req.query.redirectTo;
  }
  return passport.authenticate('nus-openid')(req, res, next);
};

/**
 * Complete OpenID Authentication
 */
exports.complete = function (req, res, next) {
  console.log(req.session.loginRedirect);
  passport.authenticate('nus-openid', {
    successRedirect: (req.session.loginRedirect === undefined) ? '/app/dashboard' : req.session.loginRedirect,
    failureRedirect: '/login'
  })(req, res, next);
};