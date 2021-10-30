const express = require("express");
const router = express.Router();

const {  createStore, getAllStores } = require("../controllers/store.controller");

router.post("/create", createStore);
router.get("/", getAllStores);

module.exports = router;