const fileService = require('../services/fileService');
const customerService = require('../services/customerService');

//{key: value}
module.exports = {
    createCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
        let imageUrl = '';
        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        } else {
            let result = await fileService.uploadSingleFile(req.files.image);
            imageUrl = result.path;
        }
        let customer = await customerService.createCustomer({
            name,
            address,
            phone,
            email,
            image: imageUrl,
            description
        });
        return res.status(200).json({
            errCode: 0,
            data: customer
        });
    },

    createArrayCustomers: async (req, res) => {
        let customers = await customerService.createArrayCustomers(req.body.customers);
        if (customers) {
            return res.status(200).json({
                errCode: 0,
                data: customers
            });
        } else {
            return res.status(200).json({
                errCode: -1,
                data: customers
            });
        }
    },

    getCustomers: async (req, res) => {
        const { limit, page, name } = req.query;
        let result = null;
        if (limit && page) {
            result = await customerService.getCustomers(limit, page, name);
        } else {
            result = await customerService.getCustomers();
        }
        return res.status(200).json({
            errCode: 0,
            data: result
        });
    },

    updateCustomer: async (req, res) => {
        const { id, email, name, address } = req.body;
        let result = await customerService.updateCustomer(id, email, name, address);
        return res.status(200).json({
            errCode: 0,
            data: result
        });
    },

    deleteCustomer: async (req, res) => {
        const id = req.body.id;
        let result = await customerService.deleteCustomer(id);
        return res.status(200).json({
            errCode: 0,
            data: result
        });
    },

    deleteArrayCustomers: async (req, res) => {
        const ids = req.body.customersId;
        let result = await customerService.deleteArrayCustomers(ids);
        return res.status(200).json({
            errCode: 0,
            data: result
        });
    },
};