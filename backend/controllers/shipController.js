const asyncHandler = require("express-async-handler");
const Shipment = require("../models/shipmentModel");

// Create Shipment
const createShipment = asyncHandler(async (req, res) => {
  const { id, type, time, quantity, } = req.body;

  //   Validation
  if (!id || !type || !quantity || !time) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Create Shipment
  const shipment = await Shipment.create({
    id,
    type, time, quantity
  });

  res.status(201).json(shipment);
});

// Get all Shipments
const getShipments = asyncHandler(async (req, res) => {
  const shipments = await Shipment.find();
  res.status(200).json(shipments);
});


module.exports = {
  createShipment,
  getShipments,
};
