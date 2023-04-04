const connection = require('../config/database');

const getAllUsers = async () => {
    const [results, fields] = await connection.query(`SELECT * FROM hoidanit.Users`);
    return results;
};

module.exports = {
    getAllUsers
};