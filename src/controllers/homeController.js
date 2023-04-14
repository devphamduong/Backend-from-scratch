const connection = require('../config/database');
const CRUDService = require('../services/CRUDService');
const User = require('../models/user');

const getHomePage = async (req, res) => {
    let results = await User.find({});
    return res.render('home.ejs', { listUsers: results });
};

const createUser = async (req, res) => {
    let { email, name, city } = req.body;
    await User.create({
        name, email, city
    });
    res.send('Done!');
};

const getCreatePage = (req, res) => {
    return res.render('create.ejs');
};

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    return res.render('edit.ejs', { user });
};

const updateUser = async (req, res) => {
    const { id, email, name, city } = req.body;
    await User.updateOne({ _id: id }, { name, email, city });
    res.redirect('/');
};

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    await User.deleteOne({ _id: userId });
    res.redirect('/');
};

module.exports = {
    getHomePage, createUser, getCreatePage, getUpdatePage, updateUser, deleteUser
};