const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io')

const app = express()
const server = createServer(app)
const io = new Server(server)

const log4js = require('log4js')
const logger = log4js.getLogger()

let crud = require('./crud')

logger.level = 'info';
const port = 3000;

logger.debug("Script has been started...")
server.listen(port);

app.use(express.static(__dirname + '/public'), (req, res) => {
    //проверка на авторизацию, если выполнена, то не направляется на логин

    res.sendFile(__dirname +'/public/login.html');
});

io.on('connection', (socket) => {
    let name = 'U' + (socket.id).substring(1,4);
    socket.broadcast.emit('newUser', name);
    socket.emit('userName', name);
    logger.info(name + ' connected to chat!');


    socket.on('login_try', (form) => {
        crud.checkItemLogin(form.login, (err, result) => {
            if (err) {
                console.error(err.message)
                socket.emit('logFail')
            }
            if (result == null) {
                socket.emit('logIncorrect')
            }
            else {
                if (result.login === form.login && result.password === form.password) {
                    socket.emit('logSuccess', result)
                    logger.info(`${form.login} connected with password ${form.password}!`)
                }
                else {
                    socket.emit('logIncorrect')
                    logger.info('Invalid password')
                    logger.info(`From db : ${result.id}`)
                }
            }
        })
    })

    socket.on('register', (form) => {
        //Регистрация при нажатии на кнопку
        crud.createItem(form.login, form.password, form.email, (err, data) => {
            if (err) {
                console.error(err.message);
                socket.emit('regFail')
            }
            else {
                console.log("Item created at " + data.lastID)
                socket.emit('regSuccess')

            }
        });
    })
})



