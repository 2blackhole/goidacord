const express = require('express');
const { createServer } = require('node:http');
const { join, resolve } = require('node:path');
const { Server } = require('socket.io')
const bodyParser = require('body-parser')

const app = express()
const server = createServer(app)
const io = new Server(server)

const log4js = require('log4js')
const logger = log4js.getLogger()

const dbworker = require('./database/dbworker')

const auth = require('./callbacks/auth')
const servers = require('./callbacks/servers')


logger.level = 'info';
const port = 3000;

logger.debug("Script has been started...")
server.listen(port);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/login', auth.login)
app.post('/register', auth.registration)

app.post('/createServer', servers.createServer)
app.post('/addServerToUser', servers.addServerToUser)
app.post('/getServers', servers.getServers)

app.use(express.static(resolve('../frontend/public')))
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../frontend/public/login.html'));
})

console.log(__dirname);

/*
io.on('connection', (socket) => {
    let name = 'U' + (socket.id).substring(1,4);
    socket.broadcast.emit('newUser', name);
    socket.emit('userName', name);
    logger.info(name + ' connected!');
})
*/
