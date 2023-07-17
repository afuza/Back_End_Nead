import express from 'express';
import {
    getAuth,
    login,
    register,
    logout,
    refresh_Token
} from '../controllers/AuthController.js';

import { verifyToken } from '../middleware/VerifyToken.js';

const router = express.Router();

router.get('/api/auth', verifyToken, getAuth);
router.post('/api/auth/login', login);
router.post('/api/auth/register', register);
router.delete('/api/auth/logout', verifyToken, logout);
router.post('/api/auth/refToken', refresh_Token);

export default router;