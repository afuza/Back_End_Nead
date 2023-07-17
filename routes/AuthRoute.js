const express = require('express');
const { getAuth, login, register, logout, refresh_Token } = require('../controllers/AuthController.js');
const verifyToken = require('../middleware/VerifyToken.js');

// import express from 'express';
// import {
//     getAuth,
//     login,
//     register,
//     logout,
//     refresh_Token
// } from '../controllers/AuthController.js';

// import { verifyToken } from '../middleware/VerifyToken.js';

const router = express.Router();

router.get('/api/auth', verifyToken, getAuth);
router.post('/api/auth/login', login);
router.post('/api/auth/register', register);
router.delete('/api/auth/logout', verifyToken, logout);
router.post('/api/auth/refToken', refresh_Token);

module.exports = router;