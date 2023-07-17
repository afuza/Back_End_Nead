import express from 'express';
import {
    getEmail,
    createEmail,
    updateEmail,
    deleteEmail,
    getEmailById
} from "../controllers/EmailController.js";
import { verifyToken } from '../middleware/VerifyToken.js';
const router = express.Router();

router.get('/api/v1/email/data', getEmail);
router.post('/api/v1/email/data', createEmail);
router.put('/api/v1/email/data/:id', updateEmail);
router.delete('/api/v1/email/data/:id', deleteEmail);
router.get('/api/v1/email/data/:id', getEmailById);

export default router;