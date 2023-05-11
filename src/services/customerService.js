const Customer = require('../models/customer');

const createCustomer = async (customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            image: customerData.image,
            description: customerData.description
        });
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getAllUsers = async () => {
    const [results, fields] = await connection.query(`SELECT * FROM hoidanit.Users`);
    return results;
};

const getUserById = async (id) => {
    const [results, fields] = await connection.query(`SELECT * FROM hoidanit.Users where id = ?`, [id]);
    return results && results.length > 0 ? results[0] : {};
};

const updateUser = async (data) => {
    const [results, fields] = await connection.query(`UPDATE Users SET email=?, name=?, city=? WHERE id=?`, [data.email, data.name, data.city, data.id]);
    return;
};

const deleteUser = async (id) => {
    const [results, fields] = await connection.query(`DELETE FROM Users WHERE id=? `, [id]);
    return;
};

module.exports = {
    createCustomer, getAllUsers, getUserById, updateUser, deleteUser
};