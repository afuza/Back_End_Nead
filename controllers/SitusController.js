import SitusData from "../models/SitusModels.js";

export const getSitus = async (req, res) => {
    try {
        const situs = await SitusData.find();
        res.status(200).json(situs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getSitusById = async (req, res) => {
    try {
        const situs = await SitusData.findById(req.params.id);
        res.status(200).json(situs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createSitus = async (req, res) => {
    const situs = req.body;
    const newSitus = new SitusData(situs);
    try {
        await newSitus.save();
        res.status(201).json(newSitus);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateSitus = async (req, res) => {
    try {
        const situs = await SitusData.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(situs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteSitus = async (req, res) => {
    try {
        const situs = await SitusData.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Situs deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

