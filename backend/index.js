const express = require("express");
const { createServer } = require("node:http");
const {Server} = require("socket.io");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const server = createServer(app);

const router = require("./router/router");
const {initSocket} = require("./socket/socket");
const port = 3000;

const io = new Server(server);
initSocket(io);

server.listen(port);

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(router);
