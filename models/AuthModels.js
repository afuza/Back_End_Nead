import mongoose from "mongoose";

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

export default mongoose.model("AuthData", AuthData);