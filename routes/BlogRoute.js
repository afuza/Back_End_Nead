const express = require('express');
const { getBlog, createBlog, updateBlog, deleteBlog, getBlogById } = require('../controllers/BlogController.js');
const verifyToken = require('../middleware/VerifyToken.js');


const router = express.Router();

router.get('/api/v1/blog/data', getBlog);
router.post('/api/v1/blog/data', createBlog);
router.put('/api/v1/blog/data/:id', updateBlog);
router.delete('/api/v1/blog/data/:id', deleteBlog);
router.get('/api/v1/blog/data/:id', getBlogById);

module.exports = router;