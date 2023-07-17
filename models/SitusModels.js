const mongoose = require("mongoose");
// import mongoose from "mongoose";

const SitusData = new mongoose.Schema({
    situs: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    earning: {
        type: String,
        required: true,
    },
    ss: {
        type: String,
        required: false,
    },
    note: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
});

// export default mongoose.model("SitusData", SitusData);
module.exports = mongoose.model("SitusData", SitusData);