const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const router = require('./router');

io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room);

        const error = true;

        if(error) {
            callback({ error: 'error' });
        }
    });

    socket.on('disconnect', () => {
        console.log('user has left');
    });
});

app.use(router);

server.listen(PORT, () => {
    console.log(`Server has started on ${PORT}`);
});