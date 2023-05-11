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
    }
};