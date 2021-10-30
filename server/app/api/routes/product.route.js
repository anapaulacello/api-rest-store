const express = require("express");
const router = express.Router();
const { isAuth } = require("../../../middlewares/auth.middleware");


const{getProductById,getAllProduct,createProduct}=require("../controllers/product.controller");

router.post("/create", createProduct);
router.get("/", getAllProduct);
router.get("/:productId", getProductById);

module.exports = router;