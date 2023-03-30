const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/duongpc', (req, res) => {
    res.render('sample.ejs');
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});