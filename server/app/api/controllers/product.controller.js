const Product=require("../models/Product.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");


const createProduct = async (req, res, next) => {
    try {
        const newProduct = new Product();
        newProduct.name = req.body.name;
        newProduct.img = req.body.img;
        newProduct.description = req.body.description;
        newProduct.price = req.body.price;
        const ProductDb = await newProduct.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { product: ProductDb.name }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllProduct = async (req, res, next) => {
    try {

            const product = await Product.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { product:product }
            });
        } catch (error) {
        return next(error)
    }
}


const getProductById = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const productById = await Product.findById(productId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { product: productById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports={getProductById,getAllProduct,createProduct};