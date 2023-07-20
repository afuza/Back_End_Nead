const express = require('express');
const { getAuth, login, register, logout, refresh_Token, getAuthByUsername } = require('../controllers/AuthController.js');
const verifyToken = require('../middleware/VerifyToken.js');


const router = express.Router();

router.get('/api/auth', verifyToken, getAuth);
router.post('/api/auth/flash', verifyToken, getAuthByUsername);
router.post('/api/auth/login', login);
router.post('/api/auth/register', register);
router.delete('/api/auth/logout', verifyToken, logout);
router.post('/api/auth/refToken', refresh_Token);

router.get('/', (req, res) => {
    res.json({ for: 'Hello World!' });
});

module.exports = router;