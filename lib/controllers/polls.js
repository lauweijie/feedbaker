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

/**
 * List poll
 */
exports.list = function (req, res, next) {
  if (!req.user) return res.json(401, "Unauthorised");
  Poll.find({
    "owner_id": req.user._id
  },
  '-answers',
  {
    sort:{ "created_at": -1 }
  },
  function(err, polls) {
    if (err) return res.json(400, err);
    return res.json(polls);
  });
};

/**
 * Update poll
 */
exports.update = function (req, res, next) {
  if (!req.user) return res.json(401, "Unauthorised");
  var set = {};
  if(req.body.active !== null) {
    set.active = req.body.active;
  }
  Poll.findOneAndUpdate({
    "_id": req.params.id,
    "owner_id": req.user._id
  },
  {
    $set: set
  },
  function(err, poll) {
    if (err) return res.json(400, err);
    return res.json(poll);
  });
};