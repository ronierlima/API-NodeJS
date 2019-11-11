const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find();

        return res.json(products);
    },

    async show(req, res) {

        if (mongoose.Types.ObjectId.isValid(req.params.id)) {

            const product = await Product.findById(req.params.id);

            if (product != null) {
                return res.json(product);
            }
        }

        return res.status(404);
    },

    async store(req, res) {
        const product = await Product.create(req.body);

        return res.status(201).json(product);
    },

    async update(req, res) {
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {

            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

            if (product != null) {
                return res.status(201).json(product);
            }
        }

        return res.sendStatus(404);
    },

    async destroy(req, res) {

        if (mongoose.Types.ObjectId.isValid(req.params.id)) {

            const product = await Product.findByIdAndRemove(req.params.id);

            if (product != null) {
                return res.send();
            }
        }
        return res.sendStatus(404);
    }
}