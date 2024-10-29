const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io')

const app = express();
const server = createServer(app)
const io = new Server(server);

const log4js = require('log4js');
const logger = log4js.getLogger();

let crud = require('./crud')
// const db = require('./database')
//
// const createItem = (login, password, email, callback) => {
//     const sql = `INSERT INTO users (login, password, email) VALUES (?, ?, ?)`
//     db.run(sql, [login, password, email], (err) => {
//         callback(err, {id: this.lastID})
//     })
// }


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
        //отправление данных клиента при нажатии на loginButton
        logger.info(form.login + ' ' + form.password);
    })

    socket.on('register', (form) => {
        //Регистрация при нажатии на кнопку
        crud.createItem(form.login, form.password, "banan@code.com", (err, data) => {
            if (err) {
                console.error(err.message);
            }
            else {
                console.log("Item created at" + data.id)
            }
        });
    })
})





