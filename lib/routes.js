'use strict';

var index = require('./controllers'),
    users = require('./controllers/users'),
    polls = require('./controllers/polls'),
    session = require('./controllers/session'),
    authenticate = require('./controllers/authenticate'),
    middleware = require('./middleware'),
    passport = require('passport');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/login/nus', authenticate.start);

  app.get('/login/nus/return', authenticate.complete);

  app.route('/api/users/me')
    .get(middleware.auth, users.me);

  app.route('/api/users/:id')
    .get(middleware.auth, users.show);

  app.route('/api/session')
    .post(session.login)
    .delete(session.logout);

  app.route('/api/polls')
    .get(middleware.auth, polls.list)
    .post(middleware.auth, polls.create);

  app.route('/api/polls/:id')
    .get(middleware.auth, polls.get)
    .put(middleware.auth, polls.update);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get(middleware.setUserCookie, index.index);
};