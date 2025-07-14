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

    const { title, category, description } = req.body;

    // Check if any required field is missing or empty
    if (!title || !category || !description) {
      return next(createError(400, "All fields (image, title, category, description) are required."));
    }

    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return next(createError(404, "Blog not found"));
    }

    // Authorization check: only the author can delete
    // if (blog.userId.toString() !== req.user.id.toString()) {
    //   return next(createError(403, "You are not authorized to delete this blog"));
    // }

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

//VERIFY BLOG
export const approveBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return next(createError(404, "Blog not found"));
    }
    // Authorization check: only the author can delete
    // if (blog.user.isAdmin !== "Admin" && blog.userId.toString() !== req.user.id.toString()) {
    //   return next(createError(409, "You are not authorized to Approve this blog"));
    // }

    // Toggle the status value
    blog.approved = !blog.approved;

    await blog.save();

    res.status(200).json({
      message: `User status updated to ${blog.approved ? 'active' : 'inactive'}`,
      blog,
    });

    // const blog = await Blog.findById(req.params.id);
    // if (!blog) return next(createError(404, "Blog not found"));

    // blog.status = true;
    // await blog.save();

    // res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
};

//DELETE
export const deleteBlog = async (req, res, next) => {

    try {
      const blog = await Blog.findById(req.params.id);
      
      if (!blog) {
        return next(createError(404, "Blog not found"));
      }

      // Authorization check: only the author can delete
      // if (blog.userId.toString() !== req.user.id.toString()) {
      //   return next(createError(403, "You are not authorized to delete this blog"));
      // }

      await blog.deleteOne(); // or Blog.findByIdAndDelete(req.params.id)
      res.status(200).json("Blog deleted successfully");
    } catch (error) {
      next(error);
    }


    // try {
    //   const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    //   res.status(200).json("Blog deleted successfully");
    // } catch (error) {
    //   next(error);
    // }
};

//GET
export const getBlog = async (req, res, next) => {
     try {
       const blog = await Blog.findById(req.params.id);

       if (!blog) {
        return next(createError(404, "Blog not found"));
       }
       
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
