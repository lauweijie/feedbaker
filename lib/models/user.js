'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  role: {
    type: String,
    default: 'user'
  },
  identity: String,
  openid: String
});

/**
 * Virtuals
 */

// Basic info to identify the current authenticated user in the app
UserSchema
  .virtual('userInfo')
  .get(function() {
    return {
      'name': this.name,
      'role': this.role,
      'email': this.email,
      'identity': this.identity
    };
  });

// Public profile information
UserSchema
  .virtual('profile')
  .get(function() {
    return {
      'name': this.name,
      'role': this.role
    };
  });

/**
 * Methods
 */
UserSchema.methods = {
  /**
   * Authenticate - check if the openids are the same
   *
   * @param {String} openid
   * @return {Boolean}
   * @api public
   */
  authenticate: function(openid) {
    return openid === this.openid;
  }
};

module.exports = mongoose.model('User', UserSchema);
