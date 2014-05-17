'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Answer Schema
 */
var AnswerSchema = new Schema({
  answer: String,
  owner: Schema.Types.ObjectId
});

/**
 * Poll Schema
 */
var PollSchema = new Schema({
  question: String,
  owner: Schema.Types.ObjectId,
  type: Number,
  status: Boolean,
  choices: [String],
  answers: [AnswerSchema]
});

module.exports = mongoose.model('Poll', PollSchema);
