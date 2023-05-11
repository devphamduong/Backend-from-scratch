const User = require('../models/user');
const fileService = require('../services/fileService');

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

const updateUser = async (req, res) => {
    const { id, email, name, city } = req.body;
    let result = await User.updateOne({ _id: id }, { name, email, city });
    return res.status(200).json({
        errCode: 0,
        data: result
    });
};

const deleteUser = async (req, res) => {
    const userId = req.body.id;
    let result = await User.deleteOne({ _id: userId });
    return res.status(200).json({
        errCode: 0,
        data: result
    });
};

const uploadSingleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let result = await fileService.uploadSingleFile(req.files.image);
    console.log(result);
};

const uploadMultipleFiles = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    if (Array.isArray(req.files.image)) {
        let result = await fileService.uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            errCode: 0,
            data: result
        });
    } else {
        return await uploadSingleFile(req, res);
    }
    console.log(result);
};

module.exports = {
    getUsers, createUser, updateUser, deleteUser, uploadSingleFile, uploadMultipleFiles
};