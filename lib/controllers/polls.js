'use strict';

var mongoose = require('mongoose'),
    Poll = mongoose.model('Poll'),
    passport = require('passport');

/**
 * Create poll
 */
exports.create = function (req, res, next) {
  var newPoll = new Poll(req.body);
  newPoll.save(function(err) {
    if (!req.user) return res.json(401, "unauthorised");
    if (err) return res.json(400, err);
    return res.json(newPoll);
  });
};