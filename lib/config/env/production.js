'use strict';

module.exports = {
  env: 'production',
  ip:   '127.0.0.1',
  port: 8080,
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
         'mongodb://localhost/feedbaker'
  }
};