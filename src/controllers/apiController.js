const User = require('../models/user');

const getUsers = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        errCode: 0,
        data: results
    });
};

const createUser = async (req, res) => {
    let { email, name, city } = req.body;
    let user = await User.create({
        name, email, city
    });
    return res.status(200).json({
        errCode: 0,
        data: user
    });
};

module.exports = {
    getUsers, createUser
};