'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Answer Schema
 */
var AnswerSchema = new Schema({
  owner_id: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  poll_id: Schema.Types.ObjectId,
  answer: Number,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Answer', AnswerSchema);
