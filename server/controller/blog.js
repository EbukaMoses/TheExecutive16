import Blog from "../model/blog.js";

//CREATE
export const createBlog = async (req, res, next) => {
  const newBlog = new Blog(req.body);
  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    next(error);
  }
};

//UPDATE
export const updateBlog = async (req, res, next) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBlog);
  } catch (error) {
    next(error);
  }
};

//DELETE
export const deleteBlog = async (req, res, next) => {
    try {
      const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
      res.status(200).json("Blog deleted successfully");
    } catch (error) {
      next(error);
    }
};

//GET
export const getBlog = async (req, res, next) => {
     try {
       const blog = await Blog.findById(req.params.id);
       res.status(200).json(blog);
     } catch (error) {
       next(error);
     }
};

//GET ALL
export const getBlogs = async (req, res, next) => {
    try {
      const blogs = await Blog.find();
      res.status(200).json(blogs);
    } catch (error) {
      next(error);
    }
};
