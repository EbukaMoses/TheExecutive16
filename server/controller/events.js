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

    const existingEvent = await Event.findById(id);
    if (!existingEvent) {
        return next(createError(404, "Event not found"));
    }

    // Upload new image if provided and delete old one
     let newImageUrl = existingEvent.image;
    let newImagePublicId = existingEvent.imagePublicId;
         

     if (req.file) {
            
        const uploadResult = await uploadToCloudinary(req.file.buffer, "event");
        newImageUrl = uploadResult.secure_url;
        newImagePublicId = uploadResult.public_id;

        // Delete old image if public_id exists
        if (existingEvent.imagePublicId) {
            await deleteFromCloudinary(existingEvent.imagePublicId);
        }
    }
    const updatedEvent = await Events.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          image: newImageUrl,
          imagePublicId: newImagePublicId,
          title,
          desc
        }
      },
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