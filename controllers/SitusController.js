const { uploadFile, deleteFile, readFile } = require("../helpers/awsS3.js");
const SitusData = require("../models/SitusModels.js");
// import SitusData from "../models/SitusModels.js";

const getSitus = async (req, res) => {
    try {
        const situs = await SitusData.find();
        res.status(200).json(situs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getSitusById = async (req, res) => {
    try {
        const situs = await SitusData.findById(req.params.id);
        res.status(200).json(situs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createSitus = async (req, res) => {
    const situs = req.body;
    const newSitus = new SitusData(situs);
    try {
        await newSitus.save();
        res.status(201).json(newSitus);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updateSitus = async (req, res) => {
    try {
        const situs = await SitusData.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(situs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const deleteSitus = async (req, res) => {
    const id = req.params.id;
    const getData = await SitusData.findById(id);
    const urlImg = getData.ss;
    const key = urlImg.split('/').pop();
    try {
        const delkey = await deleteFile(key);
        const situs = await SitusData.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Situs deleted successfully",
            delkey,
            situs
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { getSitus, createSitus, updateSitus, deleteSitus, getSitusById };