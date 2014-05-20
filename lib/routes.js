'use strict';

var index = require('./controllers'),
    users = require('./controllers/users'),
    polls = require('./controllers/polls'),
    session = require('./controllers/session'),
    middleware = require('./middleware'),
    passport = require('passport');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/login/nus',
    passport.authenticate('nus-openid'));

  app.get('/login/nus/return',
    passport.authenticate('nus-openid', {
        successRedirect: '/app/dashboard',
        failureRedirect: '/login'
    }));

  app.route('/api/users/me')
    .get(users.me);

  app.route('/api/users/:id')
    .get(users.show);

  app.route('/api/session')
    .post(session.login)
    .delete(session.logout);

  app.route('/api/polls')
    .get(polls.list)
    .post(polls.create);

  app.route('/api/polls/:id')
    .get(polls.get)
    .put(polls.update);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( middleware.setUserCookie, index.index);
};