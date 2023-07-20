const express = require('express');
const { getSitus, createSitus, updateSitus, deleteSitus, getSitusById } = require('../controllers/SitusController.js');
const verifyToken = require('../middleware/VerifyToken.js');


const router = express.Router();

router.get('/api/v1/situs/data', verifyToken, getSitus);
router.post('/api/v1/situs/data', verifyToken, createSitus);
router.put('/api/v1/situs/data/:id', verifyToken, updateSitus);
router.delete('/api/v1/situs/data/:id', verifyToken, deleteSitus);
router.get('/api/v1/situs/data/:id', verifyToken, getSitusById);

module.exports = router;