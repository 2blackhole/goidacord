const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const log4js = require('log4js');
const logger = log4js.getLogger();


const port = 3000;

logger.debug("Script has been started...")
server.listen(port);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    let name = 'U' + (socket.id).toString().substr(1,4);
    socket.broadcast.emit('newUser', name);
    socket.emit('userName', name);
    logger.info(name + ' connected to chat!');
    

    socket.on('message', (msg) => {
        logger.warn('-'*10);
        logger.warn('User: ' + name + ' | Message: ' + msg);
        io.sockets.emit('messageToClients', msg, name);
    })
})






