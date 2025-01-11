import express from "express";
import Blog from "../model/blog.js";

const router = express.Router();


//CREATE
router.post("/", async (req, res) => {

    const newBlog = new Blog(req.body)

    try {
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog)
    } catch (error) {
        res.status(500).json(error)
    }
});

//UPDATE
router.put("/:id", async (req, res) => {

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE
//GET
//GET ALL


export default router;
