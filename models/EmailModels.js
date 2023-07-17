const mongoose = require("mongoose");
// import mongoose from "mongoose";

const EmailData = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    nohp: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    ss: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
});

// export default mongoose.model("EmailData", EmailData);
module.exports = mongoose.model("EmailData", EmailData);