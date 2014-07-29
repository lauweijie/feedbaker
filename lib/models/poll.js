'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Poll Schema
 */
var PollSchema = new Schema({
  question: { type: String, required: true, trim: true },
  owner_id: Schema.Types.ObjectId,
  active: { type: Boolean, default: true },
  descript: { type: String, trim: true },
  allow_anon: { type: Boolean, default: false },
  choices: [ { type: String, required: true, trim: true } ],
  shortId: { type: String },
  created_at: { type: Date, default: Date.now }
});

PollSchema.pre('save', function(next) {
  this.shortId = Math.random().toString(36).substring(2, 8);
  next();
});

PollSchema.path('choices').validate(function (value) {
  return value.length >= 2 && value.length <= 8;
}, 'Number of choices invalid');

module.exports = mongoose.model('Poll', PollSchema);
