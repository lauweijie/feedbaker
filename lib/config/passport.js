'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    passport = require('passport'),
    config = require('./config'),
    NusOpenIDStrategy = require('passport-nus-openid').Strategy;

/**
 * Passport configuration
 */

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findOne({
    _id: id
  }, function(err, user) { // don't ever give out the password or salt
    done(err, user);
  });
});


// add other strategies for more authentication flexibility
passport.use(new NusOpenIDStrategy({
    returnURL: config.base_url + '/login/nus/return',
    realm: config.base_url + '/'
  },
  function(identifier, profile, done) {
    var openid = identifier.replace(/\/[^\/]*\\/, '/');
    var identity = openid.substring(openid.lastIndexOf("/") + 1);
    var name = profile.displayName;
    var email = (profile.emails.length > 0) ? profile.emails[0].value : null;

    User.findOne({
        "openid": openid
    }, function(err, user){
        if(user === null) {
            user = new User({
                "name": name,
                "email": email,
                "identity": identity,
                "openid": openid
            });
            user.save();
        }
        return done(null, user);
    });
  }
));

module.exports = passport;
