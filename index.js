const express = require('express');
const app = express();
const server = require('http').Server(app);
const PORT = 8083;

const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', function(socket) {
    console.info('New client connected');
    socket.emit('message', 'Welcome to the socket, client! This is a little comm for a server but a big one for developing more thigns...');
})

setInterval(function(){
    io.emit('message', 'Im going to say cucumber every 3 seconds to every connected client: CUCUMBER!')
}, 3000);




server.listen(PORT, function() {
    console.info('Socket listening at port '+PORT);
});
