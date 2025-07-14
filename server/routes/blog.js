import express from "express";
import { approveBlog, createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from "../controller/blog.js";

const router = express.Router();


//CREATE
router.post("/create-blog", createBlog);

//UPDATE
router.put("/update-blog/:id", updateBlog); 

//UPDATE
router.put("/approve-blog/:id", approveBlog); 

//DELETE
router.delete("/delete-blog/:id", deleteBlog);

//GET
router.get("/get-blog/:id", getBlog);

//GET ALL
router.get("/get-all-blogs", getBlogs);

export default router;
