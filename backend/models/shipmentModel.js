const mongoose = require("mongoose");

const shipmentSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        quantity: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Shipment = mongoose.model("Shipment", shipmentSchema);
module.exports = Shipment;
