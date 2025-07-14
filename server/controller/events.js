import { uploadToCloudinary } from "../middleware/cloudinaryImageUpload.js";
import Events from "../model/events.js";
import { createError } from "../utils/error.js";

//CREATE New Event
export const createEvent = async (req, res, next) => {
    
    try {   
        
        const { title, desc } = req.body;

        if (!req.file || !title || !desc) {
             return next(createError(400, "All fields are required"));
        }
        //waiting for the uploadtocloudinary hoot to return the image url
        const imageUrl = await uploadToCloudinary(req.file.buffer, "event");

        //create new event
        const newEvent = new Events({
            image: imageUrl.secure_url,
            title,
            desc,
        });
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);  
    } catch (error) {
        next(error)
    }
}

//UPDATE
export const updateEvent = async (req, res, next) => {
  try {
    const updatedEvent = await Events.findByIdAndUpdate(
      req.params.id,
      { $set: image, title, desc },
      { new: true }
    );
    res.status(200).json(updatedEvent);
  } catch (error) {
    next(error);
  }
};

//DELETE
export const deleteEvent = async (req, res, next) => {
    try {
      const deletedEvent = await Event.findByIdAndDelete(req.params.id);
      res.status(200).json("Event deleted successfully");
    } catch (error) {
      next(error);
    }
};



//GET ALL
export const getEvents = async (req, res, next) => {
    try {
      const AllEvents = await Events.find();
      res.status(200).json(AllEvents);
    } catch (error) {
      next(error);
    }
};