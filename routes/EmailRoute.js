const express = require('express');
const { getEmail, createEmail, updateEmail, deleteEmail, getEmailById } = require('../controllers/EmailController.js');
const verifyToken = require('../middleware/VerifyToken.js');


const router = express.Router();

router.get('/api/v1/email/data', verifyToken, getEmail);
router.post('/api/v1/email/data', verifyToken, createEmail);
router.put('/api/v1/email/data/:id', verifyToken, updateEmail);
router.delete('/api/v1/email/data/:id', verifyToken, deleteEmail);
router.get('/api/v1/email/data/:id', verifyToken, getEmailById);

module.exports = router;