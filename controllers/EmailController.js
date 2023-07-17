const EmailData = require("../models/EmailModels.js");

// import EmailData from "../models/EmailModels.js";

const getEmail = async (req, res) => {
    try {
        const email = await EmailData.find();
        res.status(200).json(email);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const createEmail = async (req, res) => {
    const email = req.body;
    const newEmail = new EmailData(email);
    try {
        await newEmail.save();
        res.status(201).json(newEmail);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updateEmail = async (req, res) => {
    const id = req.params.id;
    const email = req.body;
    try {
        const updatedEmail = await EmailData.findByIdAndUpdate(id, email, { new: true });
        res.status(200).json(updatedEmail);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const deleteEmail = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedEmail = await EmailData.findByIdAndDelete(id);
        res.status(200).json({ message: "Email deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getEmailById = async (req, res) => {
    const id = req.params.id;
    try {
        const email = await EmailData.findById(id);
        res.status(200).json(email);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { getEmail, createEmail, updateEmail, deleteEmail, getEmailById };