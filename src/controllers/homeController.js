const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
};

const createUser = (req, res) => {
    let { email, name, city } = req.body;
    connection.query(
        `INSERT INTO hoidanit.Users (email, name, city) VALUES(?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            return res.send('done');
        }
    );

};

module.exports = {
    getHomePage, createUser
};