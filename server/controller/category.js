import PostCategory from "../model/category.js";

//CREATE
export const createCategory = async (req, res, next) => {
try {
    const { title } = req.body;
    if (!title) {
        return next(createError(400, "Field must not be empty"));
    }
    const newCategory = new PostCategory({title});
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    next(error);
  }
};

//UPDATE
export const updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await PostCategory.findByIdAndUpdate(
      req.params.id,
      { $set: title },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    next(error);
  }
};

//DELETE
export const deleteCategory = async (req, res, next) => {
    try {
      const deletedCategory = await PostCategory.findByIdAndDelete(req.params.id);
      res.status(200).json("Category deleted successfully");
    } catch (error) {
      next(error);
    }
};


//GET ALL
export const getCategories = async (req, res, next) => {
    try {
      const Category = await PostCategory.find();
      res.status(200).json(Category);
    } catch (error) {
      next(error);
    }
};