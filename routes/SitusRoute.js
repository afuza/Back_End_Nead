const express = require('express');
const { getSitus, createSitus, updateSitus, deleteSitus, getSitusById } = require('../controllers/SitusController.js');
const verifyToken = require('../middleware/VerifyToken.js');


const router = express.Router();

// import express from 'express';
// import {
//     getSitus,
//     createSitus,
//     updateSitus,
//     deleteSitus,
//     getSitusById
// } from "../controllers/SitusController.js";
// import { verifyToken } from '../middleware/VerifyToken.js';
// const router = express.Router();

router.get('/api/v1/situs/data', getSitus);
router.post('/api/v1/situs/data', createSitus);
router.put('/api/v1/situs/data/:id', updateSitus);
router.delete('/api/v1/situs/data/:id', deleteSitus);
router.get('/api/v1/situs/data/:id', getSitusById);

module.exports = router;