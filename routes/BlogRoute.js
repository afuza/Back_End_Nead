import express from 'express';
import {
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog,
    getBlogById
} from "../controllers/BlogController.js";
import { verifyToken } from '../middleware/VerifyToken.js';

const router = express.Router();

router.get('/api/v1/blog/data', getBlog);
router.post('/api/v1/blog/data', createBlog);
router.put('/api/v1/blog/data/:id', updateBlog);
router.delete('/api/v1/blog/data/:id', deleteBlog);
router.get('/api/v1/blog/data/:id', getBlogById);

export default router;