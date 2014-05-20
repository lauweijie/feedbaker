'use strict';

var mongoose = require('mongoose'),
    Poll = mongoose.model('Poll'),
    passport = require('passport');

/**
 * Create poll
 */
exports.create = function (req, res, next) {
  if (!req.user) return res.json(401, "Unauthorised");
  var newPoll = new Poll(req.body);
  newPoll.owner_id = req.user._id;
  newPoll.save(function(err) {
    if (err) return res.json(400, err);
    return res.json(newPoll);
  });
};