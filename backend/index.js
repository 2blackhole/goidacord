const express = require("express");
const { createServer } = require("node:http");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const server = createServer(app);

const router = require("./router/router");
const port = 3000;

server.listen(port);

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(router);
