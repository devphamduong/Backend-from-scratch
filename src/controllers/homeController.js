const connection = require('../config/database');

const getHomePage = (req, res) => {
    let users = [];
    connection.query(
        'select * from Users',
        function (err, results, fields) {
            users = results;
            res.send(JSON.stringify(users));
        }
    );
};

module.exports = {
    getHomePage
};