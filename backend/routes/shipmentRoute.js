const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const {
    createShipment,
    getShipments,
} = require("../controllers/shipController");

router.post("/", createShipment);
router.get("/", getShipments);

module.exports = router;
