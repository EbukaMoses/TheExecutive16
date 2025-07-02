import Suggestion from "../model/suggestion.js";
import { createError } from "../utils/error.js";

//CREATE
export const createSuggestion = async (req, res, next) => {
try {
    const { title, desc } = req.body;
    if (!title || !desc) {
        return next(createError(400, "No Field must not be empty"));
    }
    const newSuggestion = new Suggestion({title});
    const savedSuggestion = await newSuggestion.save();
    res.status(201).json(savedSuggestion);
  } catch (error) {
    next(error);
  }
};

//UPDATE
export const updateSuggestion = async (req, res, next) => {
  try {
    const updatedSuggestion = await Suggestion.findByIdAndUpdate(
      req.params.id,
      { $set: title, desc},
      { new: true }
    );
    res.status(200).json(updatedSuggestion);
  } catch (error) {
    next(error);
  }
};

//DELETE
export const deleteSuggestion = async (req, res, next) => {
    try {
      const deletedSuggestion = await Suggestion.findByIdAndDelete(req.params.id);
      res.status(200).json("Suggestion deleted successfully");
    } catch (error) {
      next(error);
    }
};

//GET ALL
export const getSuggestions = async (req, res, next) => {
    try {
      const Suggestions = await Suggestion.find();
      res.status(200).json(Suggestions);
    } catch (error) {
      next(error);
    }
};