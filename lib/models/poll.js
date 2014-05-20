'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Answer Schema
 */
var AnswerSchema = new Schema({
  answer: String,
  owner_id: Schema.Types.ObjectId
});

/**
 * Poll Schema
 */
var PollSchema = new Schema({
  question: { type: String, required: true, trim: true },
  owner_id: Schema.Types.ObjectId,
  active: { type: Boolean, default: false },
  choices: [ { type: String, required: true, trim: true} ],
  answers: [AnswerSchema],
  created_at: { type: Date, default: Date.now }
});

PollSchema.path('choices').validate(function (value) {
  return value.length >= 2 && value.length <= 8;
}, 'Number of choices invalid');

module.exports = mongoose.model('Poll', PollSchema);
