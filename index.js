const express = require('express');
const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', function(socket) {
    console.info('New client connected');
    socket.emit('message', 'This is a little comm for a server but a big one for developing more thigns...');
})


const PORT = 8083;
server.listen(PORT, function() {
    console.info('Socket listening at port '+PORT);
});
