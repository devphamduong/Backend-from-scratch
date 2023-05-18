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

const updateCustomer = async (id, email, name, address) => {
    try {
        let result = await Customer.updateOne({ _id: id }, { name, email, address });
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const deleteCustomer = async (id) => {
    try {
        let result = await Customer.deleteById({ _id: id });
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const createArrayCustomers = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getCustomers = async () => {
    try {
        let result = await Customer.find({});
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const deleteArrayCustomers = async (ids) => {
    try {
        let result = await Customer.delete({ _id: { $in: ids } });
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

module.exports = {
    createCustomer, updateCustomer, deleteCustomer, createArrayCustomers, getCustomers, deleteArrayCustomers
};