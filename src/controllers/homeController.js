const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
};

const createUser = async (req, res) => {
    let { email, name, city } = req.body;
    // connection.query(
    //     `INSERT INTO hoidanit.Users (email, name, city) VALUES(?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         return res.send('done');
    //     }
    // );
    const [results, fields] = await connection.query(`INSERT INTO hoidanit.Users (email, name, city) VALUES(?, ?, ?)`, [email, name, city]);
    res.send('Done!');
};

const getCreatePage = (req, res) => {
    return res.render('create.ejs');
};

module.exports = {
    getHomePage, createUser, getCreatePage
};