const express = require('express');
const http = require('http');
const SocketIO = require('socket.io');

const port = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);
const io = SocketIO(server, {
  cors: {
    origin: '*',
  }
});

app.get('/', (req, res) => {
  res.sendStatus(200);
});

io.on('connection', (socket) => {
  console.log('nueva conexión');
  // socket = la persona que se acaba de conectar

  // socket.emit('welcome', 'Hola bienvenid@')

  // socket.on('welcome', () => {
  // });

  // io = representa todas las personas conectadas incluida la nueva conexión
  io.emit('welcome', 'Hay una nueva conexión');

  socket.on('message', async data => {
    // const message = await Message.create(data);
    // socket.broadcast = todas las conexiones menos el socket
    socket.broadcast.emit('message', data);
  });

  socket.on('join', () => {
    socket.join('some-room');
    socket.emit('join', 'joined successfully');
  });

  socket.on('leave', () => {
    socket.leave('some-room');
    socket.broadcast.to('some-room').emit('leave', 'someone left the channel');
  });

  socket.on('private', data => {
    // io.to = todas las personas que están en un room
    // io.to('some-room').emit('private', data);
    socket.broadcast.to('some-room').emit('private', data);
  });

  socket.on('disconnect', () => {
    console.log('disconnected')
  })
});

server.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
