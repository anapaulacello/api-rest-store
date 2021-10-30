const Store = require("../models/Store.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createStore = async (req, res, next) => {
    try {
        const newStore = new Store();
        newStore.name = req.body.name;
        newStore.products = req.body.products;
        const StoreDb = await newStore.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { store: StoreDb }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllStores = async (req, res, next) => {
    try {
        const stores = await Store.find().populate("products");
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { stores: stores }
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = { createStore, getAllStores }