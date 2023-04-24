require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })); //for form data

//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes);
app.use('/api/v1/', apiRoutes);

//test connection
(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
})();