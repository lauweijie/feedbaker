'use strict';

module.exports = function(app, io) {

  io.sockets.on('connection', function (socket) {

    socket.on('subscribe', function(room) {
      var roomPath = room.split('/');
      switch(roomPath[0]) {
        case 'results':
          // TODO verify socket.request.user is authorized to view results for poll
          socket.join(room);
          break;
      }
    });
    socket.on('unsubscribe', function(room) {
      socket.leave(room);
    });

  });

};
