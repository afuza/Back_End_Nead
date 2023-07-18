const mongoose = require("mongoose");
// import mongoose from "mongoose";

const AuthData = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("AuthData", AuthData);