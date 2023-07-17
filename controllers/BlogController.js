import BlogData from "../models/BlogModels.js";

export const getBlog = async (req, res) => {
    try {
        const blog = await BlogData.find();
        res.status(200).json(blog);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createBlog = async (req, res) => {
    const blog = req.body;
    const newBlog = new BlogData(blog);
    try {
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateBlog = async (req, res) => {
    const blogId = req.params.id;
    const blog = req.body;
    try {
        const updatedBlog = await BlogData.findByIdAndUpdate(blogId, blog, { new: true });
        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteBlog = async (req, res) => {
    const blogId = req.params.id;
    try {
        const deletedBlog = await BlogData.findByIdAndDelete(blogId);
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getBlogById = async (req, res) => {
    const blogId = req.params.id;
    try {
        const blog = await BlogData.findById(blogId);
        res.status(200).json(blog);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

