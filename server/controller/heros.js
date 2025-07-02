import Heros from "../model/heros.js";
import { createError } from "../utils/error.js";

//CREATE New Heros
export const createHeros = async (req, res, next) => {
    
    try {   
        
        const { town, stateOfOrigin, dateOfDeath, causeOfDeath, buriedOn, } = req.body;

        if (!req.file || !town || !stateOfOrigin || !dateOfDeath || !causeOfDeath || !buriedOn) {
             return next(createError(400, "All fields are required"));
        }

        //waiting for the uploadtocloudinary hoot to return the image url
        const imageUrl = await uploadToCloudinary(req.file.buffer, "heros");

        //create new heros
        const newHeros = new Heros({
            image: imageUrl.secure_url,
            town,
            stateOfOrigin,
            dateOfDeath,
            causeOfDeath,
            buriedOn,
        });
        const savedHeros = await newHeros.save();
        res.status(201).json(savedHeros);  
    } catch (error) {
        next(error)
    }
}

//UPDATE
export const updateHeros = async (req, res, next) => {
  try {
    const updatedHeros = await Heros.findByIdAndUpdate(
      req.params.id,
      { $set: image, town, stateOfOrigin, dateOfDeath, causeOfDeath, buriedOn },
      { new: true }
    );
    res.status(200).json(updatedHeros);
  } catch (error) {
    next(error);
  }
};

//DELETE
export const deleteHeros = async (req, res, next) => {
    try {
      const deletedHeros = await Heros.findByIdAndDelete(req.params.id);
      res.status(200).json("Heros deleted successfully");
    } catch (error) {
      next(error);
    }
};



//GET ALL
export const getHeros = async (req, res, next) => {
    try {
      const AllHeros = await Heros.find();
      res.status(200).json(AllHeros);
    } catch (error) {
      next(error);
    }
};
