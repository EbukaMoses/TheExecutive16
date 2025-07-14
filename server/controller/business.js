import Business from "../model/business.js";
import { deleteFromCloudinary, uploadToCloudinary } from "../middleware/cloudinaryImageUpload.js";
import { isValidEmail } from "../utils/iValidEmail.js";
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

        // Validate phone number length (between 10 and 15 digits)
        if (!/^\d{10,15}$/.test(phone)) {
            return next(createError(400, "Phone number must be between 10 and 15 digits"));
        }

        const imageUrl = await uploadToCloudinary(req.file.buffer, "Business");

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
        const { id } = req.params;
        const { title, owner, phone, email, location, desc } = req.body;

        const existingBusiness = await Business.findById(id);
        if (!existingBusiness) {
            return next(createError(404, "Business not found"));
        }

        // Optional: Authorization check (only owner can update)
        // if (req.user && existingBusiness.userId && existingBusiness.userId.toString() !== req.user.id) {
        //     return next(createError(403, "You are not authorized to update this business"));
        // }

        // Validate email if provided
        if (email && !isValidEmail(email)) {
            return next(createError(400, "Invalid email format"));
        }

        // Validate phone if provided
        if (phone && !/^\d{10,15}$/.test(phone.toString().trim())) {
            return next(createError(400, "Phone number must be between 10 and 15 digits"));
        }

        
         // Upload new image if provided and delete old one
         let newImageUrl = existingBusiness.image;
        let newImagePublicId = existingBusiness.imagePublicId;
         

         if (req.file) {
            
            const uploadResult = await uploadToCloudinary(req.file.buffer, "Business");
            newImageUrl = uploadResult.secure_url;
            newImagePublicId = uploadResult.public_id;

            // Delete old image if public_id exists
            if (existingBusiness.imagePublicId) {
                await deleteFromCloudinary(existingBusiness.imagePublicId);
            }
        }
         
        //update business
        const updateBusiness = await Business.findByIdAndUpdate(
          id,
          {
            $set: {
              image: newImageUrl,
              imagePublicId: newImagePublicId,
              title,
              owner,
              phone,
              email,
              location,
              desc,
            },
          },
          { new: true }
        );

        const updatedBusiness = await updateBusiness.save();

        res.status(200).json(updatedBusiness);

    } catch (error) {
        next(error);
    }
    
    // try {   
        
    //     const { title, owner, phone, email, location, desc } = req.body;

    //     if (!req.file || !title || !owner || !phone || !email || !location || !desc) {
    //          return next(createError(400, "All fields are required"));
    //     }

    //     if (!isValidEmail(email)) {
    //          return next(createError(400, "Invalid Email Format"));
    //     }

    //     // Validate phone number length (between 10 and 15 digits)
    //     if (!/^\d{10,15}$/.test(trimmedPhone)) {
    //         return next(createError(400, "Phone number must be between 10 and 15 digits"));
    //     }

    //     //waiting for the uploadtocloudinary hoot to return the image url
    //     const imageUrl = await uploadToCloudinary(req.file.buffer, "file");

    //     //create new business
    //     const newBusiness = new Business({
    //         image: imageUrl.secure_url,
    //         title,
    //         owner,
    //         phone,
    //         email,
    //         location,
    //         desc,
    //     });
    //     const savedBusiness = await newBusiness.save();
    //     res.status(201).json(savedBusiness);  
    // } catch (error) {
    //     next(error)
    // }
}

//DELETE BUSINESS
export const deleteBusiness = async (req, res, next) => {

    try {
        const bizToDelete = await Business.findById(req.params.id);
        if (!bizToDelete) {
          return next(createError(404, "Business not found"));
        }

        // Authorization check: only the author can delete
        // if (bizToDelete.userId.toString() !== req.user.id.toString()) {
        //   return next(createError(403, "You are not authorized to delete this business"));
        // }

        if (bizToDelete && bizToDelete.imagePublicId) {
            await deleteFromCloudinary(bizToDelete.imagePublicId);
        }
        await bizToDelete.deleteOne(); // or Blog.findByIdAndDelete(req.params.id)
        res.status(200).json("Business deleted successfully");

      } catch (error) {
        next(error);
      }    
}

//APPROVE BUSINESS
export const approveBusiness = async (req, res, next) => {
     try {
        const biz = await Business.findById(req.params.id);

        if (!biz) {
          return next(createError(404, "Business not found"));
         }
         
        // Authorization check: only the author can delete
        // if (biz.user.isAdmin !== "Admin" && biz.userId.toString() !== req.user.id.toString()) {
        //   return next(createError(409, "You are not authorized to Approve this business"));
        // }

        // Toggle the status value
        biz.approved = !biz.approved;

        await biz.save();

        res.status(200).json({
          message: `User status updated to ${biz.approved ? 'active' : 'inactive'}`,
          biz,
        });

      } catch (error) {
        next(error);
      }
}

//GET SINGLE BUSINESS
export const getBusiness = async (req, res, next) => {
    try {
       const biz = await Business.findById(req.params.id);

       if (!biz) {
        return next(createError(404, "Business not found"));
       }
       
       res.status(200).json(biz);
     } catch (error) {
       next(error);
     }
}

//GET ALL BUSINESS
export const getBusinesses = async (req, res, next) => {
    try {
        const allBiz = await Business.find();

        if (!allBiz) {
            return next(createError(404, "Business not found"));
        }
        
        res.status(200).json(allBiz)
    } catch (error) {
        next(error);
    }
}



