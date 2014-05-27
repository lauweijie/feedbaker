'use strict';

var mongoose = require('mongoose'),
    Poll = mongoose.model('Poll'),
    PollAnswer = mongoose.model('Answer'),
    passport = require('passport');

/**
 * Create poll
 */
exports.create = function (req, res, next) {
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
  Poll.find({
    'owner_id': req.user._id
  },
  '',
  {
    sort:{ 'created_at': -1 }
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
  var set = {};
  if(req.body.active !== null) {
    set.active = req.body.active;
  }
  Poll.findOneAndUpdate({
    '_id': req.params.id,
    'owner_id': req.user._id
  },
  {
    $set: set
  },
  function(err, poll) {
    if (err) return res.json(400, err);
    if (!poll) return res.json(400, 'Invalid Poll');
    return res.json(poll);
  });
};

/**
 * Delete poll
 */
exports.delete = function (req, res, next) {
  Poll.findOneAndRemove({
    '_id': req.params.id,
    'owner_id': req.user._id
  },
  function(err, poll) {
    if (err) return res.json(400, err);
    if (!poll) return res.json(400, 'Invalid Poll');
    PollAnswer.remove({
      'poll_id': poll._id
    },
    function(err) {
      if (err) return res.json(400, err);
      return res.json(poll);
    });
  });
};

/**
 * Get poll
 */
exports.get = function (req, res, next) {
  var query = { $or: [
    { 'active': true },
    { 'owner_id': req.user._id }
  ]};
  if(req.params.id !== undefined) {
    query._id = req.params.id;
  } else {
    query.shortId = req.params.shortid;
  }
  Poll.findOne(query,
  function(err, poll) {
    if (err) return res.json(400, err);
    if (!poll) return res.json(400, 'Invalid Poll');
    return res.json(poll);
  });
};

/**
 * Get poll results
 */
exports.getResults = function (req, res, next) {
  var query = { $or: [
    { 'active': true },
    { 'owner_id': req.user._id }
  ]};
  if(req.params.id !== undefined) {
    query._id = req.params.id;
  } else {
    query.shortId = req.params.shortid;
  }
  Poll.findOne(query,
  function(err, poll) {
    if (err) return res.json(400, err);
    if (!poll) return res.json(400, 'Invalid Poll');
    PollAnswer.aggregate()
      .match({ 'poll_id': poll._id })
      .group({ '_id': '$answer', count: { $sum: 1 } })
      .exec(function(err, answerCount) {
        return res.json({
          'poll': poll,
          'answerCount': answerCount
        });
      });
  });
};
