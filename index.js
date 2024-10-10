const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

const app = express();

const port = 1488;

app.get('/', (req, res) => {
    res.send('Главная страница сайта!!!!');
})

app.listen(port, () => {
    console.log("Start server");
});