'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    passport = require('passport');

/**
 *  Get profile of specified user
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(404);

    res.send({ profile: user.profile });
  });
};

/**
 * Get current user
 */
exports.me = function(req, res) {
  res.json(req.user);
};