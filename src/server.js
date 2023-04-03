require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes);

// simple query
connection.query(
    'select * from Users',
    function (err, results, fields) {
        console.log(results);
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});