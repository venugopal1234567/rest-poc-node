const Product = require("../models/productModel")
const _ = require("lodash")

module.exports = {
    getAllProducts: async( req, res) => {
        try {
            const products = await Product.find({})
            if(!products) {
                throw new Error('no products found')
            }
            return res.status(200).json({
                status: "success",
                message: "Successfully retrived product",
                data: products
            })
        } catch (err) {
            return res.status(400).json({
                status: "failed",
                message: err,
                data: {}
            })
        }
    },
    addProduct: async( req, res) => {
        try {
            let bodyParams = req.body
            bodyParams = _.pick(bodyParams, 'skuId' , 'name', 'cost', 'quantity')

            const newProduct = await new Product(bodyParams)
            await newProduct.save()

            return res.status(200).json({
                status: "success",
                message: "Added product successfully.",
                data: newProduct
            })
        } catch (err) {
            return res.status(400).json({
                status: "failed",
                message: err,
                data: {}
            })
        }
    },
    updateProduct: async( req, res) => {
        try {
            const productId = req.params.id;
            let bodyParams = req.body
            bodyParams = _.pick(bodyParams, 'name', 'cost', 'quantity')

            const updatedProduct = await Product.findOneAndUpdate({_id: productId}, bodyParams)
            if (!updatedProduct){
                throw new Error("product not found")
            }
            return res.status(200).json({
                status: "success",
                message: "Successfully updated product",
                data: updatedProduct
            })
        } catch (err) {
            return res.status(400).json({
                status: "failed",
                message: err,
                data: {}
            })
        }
    },
    deleteProduct: async( req, res) => {
        try {
            const productId = req.params.id;

            await Product.deleteOne({_id: productId})

            return res.status(200).json({
                status: "success",
                message: "Successfully deleted product",
                data: {}
            })
        } catch (err) {
            return res.status(400).json({
                status: "failed",
                message: err,
                data: {}
            })
        }
    },
    getProduct: async( req, res) => {
        try {
            const productId = req.params.id;

            const product = await Product.findOne({_id: productId})
            if (!product){
                throw new Error("product not found")
            }

            return res.status(200).json({
                status: "success",
                message: "Successfully retreived product",
                data: product
            })
        } catch (err) {
            return res.status(400).json({
                status: "failed",
                message: err,
                data: {}
            })
        }
    }
}