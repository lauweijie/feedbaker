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
  question: { type: String, required: true },
  owner: Schema.Types.ObjectId,
  type: Number,
  status: Boolean,
  choices: [String],
  answers: [AnswerSchema]
});

PollSchema.path('choices').validate(function (value) {
  for(int i = 0; i < value.length; i++) {
    if(value[i].length == 0) {
      return false;
    }
  }
  return value.length >= 2 && value.length <= 8;
}, 'Choices invalid');

module.exports = mongoose.model('Poll', PollSchema);
