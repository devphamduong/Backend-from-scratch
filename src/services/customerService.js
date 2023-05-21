const Customer = require('../models/customer');
const aqp = require('api-query-params');

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

const getCustomers = async (limit, page, queryString) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            const { filter } = aqp(queryString);
            delete filter.page;
            result = await Customer.find(filter).skip(offset).limit(limit).exec();
        } else {
            result = await Customer.find({});
        }
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