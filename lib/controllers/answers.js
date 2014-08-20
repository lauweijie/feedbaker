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
    'owner_id': req.user._id,
    'poll_id': req.params.id
  },
  function(err, answer) {
    if (err) return res.json(400, err);
    return res.json(answer);
  });
};

/**
 * Delete answer for current user
 **/
 exports.delete = function(io) {
  return function (req, res, next) {
    Poll.findOne({
      '_id': req.params.id,
      'active': true
    },
    // Complete this part to fix the undo problems
    Answer.findOneAndRemove({
      'owner_id': req.user._id,
      'poll_id': req.params.id
    },
    function(err, answer) {
      if (err || answer == null) return res.json(400, err);

    // Emit update on socket
    Answer.aggregate()
    .match({ 'poll_id': answer.poll_id })
    .group({ '_id': '$answer', count: { $sum: 1 } })
    .exec(function(err, answerCount) {
      io.to('results/' + answer.poll_id).emit('update', {'answerCount': answerCount});
    });

    return res.json(answer);
  });
  };
};
/**
 * Set answer for current user
 */
 exports.set = function (io) {
  return function (req, res, next) {
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
        'owner_id': req.user._id,
        'poll_id': req.params.id,
      }, {
        'answer': req.body.answer
      }, {
        upsert: true
      },
      function(err, answer) {
        if (err) return res.json(400, err);

        // Emit update on socket
        Answer.aggregate()
        .match({ 'poll_id': poll._id })
        .group({ '_id': '$answer', count: { $sum: 1 } })
        .exec(function(err, answerCount) {
          io.to('results/' + poll._id).emit('update', {'answerCount': answerCount});
        });

        return res.json(answer);
      });
    });
  };
};
