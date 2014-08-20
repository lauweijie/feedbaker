'use strict';

var index = require('./controllers'),
    users = require('./controllers/users'),
    polls = require('./controllers/polls'),
    answers = require('./controllers/answers'),
    session = require('./controllers/session'),
    authenticate = require('./controllers/authenticate'),
    middleware = require('./middleware'),
    passport = require('passport');

/**
 * Application routes
 */
module.exports = function(app, io) {

  // Param Checking
  app.param(function(name, fn){
    if (fn instanceof RegExp) {
      return function(req, res, next, val){
        var captures;
        if (!!(captures = fn.exec(String(val)))) {
          req.params[name] = captures;
          next();
        } else {
          next('route');
        }
      };
    }
  });

  app.param('id', /^[0-9a-fA-F]{24}$/);
  app.param('shortid', /^[0-9a-z]{6}$/);

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

  app.route('/api/polls/:shortid')
    .get(middleware.auth, polls.get);

  app.route('/api/polls/:id')
    .get(middleware.auth, polls.get)
    .put(middleware.auth, polls.update)
    .delete(middleware.auth, polls.delete);

  app.route('/api/polls/:id/results')
    .get(middleware.auth, polls.getResults);

  app.route('/api/polls/:id/answer')
    .get(middleware.auth, answers.get)
    .put(middleware.auth, answers.set(io))
    .delete(middleware.auth, answers.delete(io));

  app.route('/app/polls/:id/results/export')
    .get(middleware.auth, polls.exportResults);

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
