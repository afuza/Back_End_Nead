const mongoose = require("mongoose");
// import mongoose from "mongoose";

const BlogData = new mongoose.Schema({
    domain: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    adsense: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    artikel: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("BlogData", BlogData);