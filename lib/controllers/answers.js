'use strict';

var mongoose = require('mongoose'),
    Poll = mongoose.model('Poll'),
    Answer = mongoose.model('Answer'),
    passport = require('passport');

/**
 * Get answer by current user
 */
exports.get = function (req, res, next) {
  Answer.findOne({
    'user_id': req.user._id,
    'poll_id': req.params.id
  },
  function(err, answer) {
    if (err) return res.json(400, err);
    return res.json(answer);
  });
};

/**
 * Set answer for current user
 */
exports.set = function (req, res, next) {
  Poll.findOne({
    '_id': req.params.id,
    'active': true
  },
  {
    choices: 1
  },
  function(err, poll) {
    if(!poll) {
      return res.json(400, "Invalid poll");
    }
    if(parseInt(req.body.answer) >= poll.choices.length) {
      return res.json(400, "Invalid answer");
    }
    Answer.findOneAndUpdate({
      'user_id': req.user._id,
      'poll_id': req.params.id,
    }, {
      'answer': req.body.answer
    }, {
      upsert: true
    },
    function(err, answer) {
      if (err) return res.json(400, err);
      return res.json(answer);
    });
  });
};