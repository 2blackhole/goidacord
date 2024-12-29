const express = require('express');
const { createServer } = require('node:http');
const { join, resolve } = require('node:path');
//const { Server } = require('socket.io')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const server = createServer(app)
//const io = new Server(server)

const log4js = require('log4js')
const logger = log4js.getLogger()

const auth = require('./handlers/auth/auth')
const auth_middleware = require('./middleware/auth_middleware')
const servers = require('./handlers/servers/servers')

logger.level = 'info';
const port = 3000;

logger.debug("Script has been started...")
server.listen(port);

app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.post('/login', auth.login)
app.post('/register', auth.registration)
app.use(auth_middleware.authenticateToken)
app.post('/createServer', servers.createServer)
app.post('/addServerToUser', servers.addServerToUser)
app.get('/getServers', servers.getServers)