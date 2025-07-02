import Business from "../model/business.js";
import { uploadToCloudinary } from "../middleware/uploadSingleImg.js";
import { isValidEmail } from "../middleware/iValidEmail.js";
import { createError } from "../utils/error.js";


//CREATE New Business
export const createBusiness = async (req, res, next) => {
    
    try {   
        
        const { title, owner, phone, email, location, desc } = req.body;

        if (!req.file || !title || !owner || !phone || !email || !location || !desc) {
             return next(createError(400, "All fields are required"));
        }

        if (!isValidEmail(email)) {
             return next(createError(400, "Invalid Email Format"));
        }

        if (phone.toString().length !== 11) {
             return next(createError(400, "Phone number must be 11 digits"));
        }

        const imageUrl = await uploadToCloudinary(req.file.buffer, "file");

        //create new business
        const newBusiness = new Business({
            image: imageUrl.secure_url,
            title,
            owner,
            phone,
            email,
            location,
            desc,
        });
        const savedBusiness = await newBusiness.save();
        res.status(201).json(savedBusiness);  
    } catch (error) {
        next(error)
    }
}

//UPDATE BUSINESS
export const updateBusiness = async (req, res, next) => {
    
    try {   
        
        const { title, owner, phone, email, location, desc } = req.body;

        if (!req.file || !title || !owner || !phone || !email || !location || !desc) {
             return next(createError(400, "All fields are required"));
        }

        if (!isValidEmail(email)) {
             return next(createError(400, "Invalid Email Format"));
        }

        if (phone.toString().length !== 11) {
             return next(createError(400, "Phone number must be 11 digits"));
        }

        //waiting for the uploadtocloudinary hoot to return the image url
        const imageUrl = await uploadToCloudinary(req.file.buffer, "file");

        //create new business
        const newBusiness = new Business({
            image: imageUrl.secure_url,
            title,
            owner,
            phone,
            email,
            location,
            desc,
        });
        const savedBusiness = await newBusiness.save();
        res.status(201).json(savedBusiness);  
    } catch (error) {
        next(error)
    }
}

//DELETE BUSINESS




