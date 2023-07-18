const mongoose = require("mongoose");

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

module.exports = mongoose.model("EmailData", EmailData);