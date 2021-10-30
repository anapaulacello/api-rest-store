const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    name: { type: String, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: "product", required: true }]
});

const Store = mongoose.model("store", StoreSchema);
module.exports = Store;