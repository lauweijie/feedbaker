'use strict';

var mongoose = require('mongoose'),
    Poll = mongoose.model('Poll');

module.exports = function(app, io) {

  io.sockets.on('connection', function (socket) {

    socket.on('subscribe', function(room) {
      var roomPath = room.split('/');
      switch(roomPath[0]) {
        case 'results':
          Poll.count({
            '_id': roomPath[1],
            'owner_id': socket.request.user._id
          }, function(err, count) {
            if(count === 1) {
              socket.join(room);
            }
          });
          break;
      }
    });
    socket.on('unsubscribe', function(room) {
      socket.leave(room);
    });

  });

};
