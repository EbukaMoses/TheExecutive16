import Testimony from "../model/testimony.js";
import { createError } from "../utils/error.js";

//CREATE
export const createTestimony = async (req, res, next) => {
try {
    const { desc } = req.body;
    if ( !desc ) {
        return next(createError(400, "No Field must not be empty"));
    }
    const newTestimony = new Testimony({title});
    const savedTestimony = await newTestimony.save();
    res.status(201).json(savedTestimony);
  } catch (error) {
    next(error);
  }
};

//UPDATE
export const updateTestimony = async (req, res, next) => {
  try {
    const updatedTestimony = await Testimony.findByIdAndUpdate(
      req.params.id,
      { $set: desc},
      { new: true }
    );
    res.status(200).json(updatedTestimony);
  } catch (error) {
    next(error);
  }
};

//DELETE
export const deleteTestimony = async (req, res, next) => {
    try {
      const deletedTestimony = await Testimony.findByIdAndDelete(req.params.id);
      res.status(200).json("Testimony deleted successfully");
    } catch (error) {
      next(error);
    }
};


//GET ALL
export const getTestimonies = async (req, res, next) => {
    try {
      const Testimonys = await Testimony.find();
      res.status(200).json(Testimonys);
    } catch (error) {
      next(error);
    }
};