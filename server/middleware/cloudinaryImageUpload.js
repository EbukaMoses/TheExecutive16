
import multer from 'multer';
import streamifier from 'streamifier';
import cloudinary from "../utils/cloudinary.js"




// Multer in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

function uploadToCloudinary(buffer, folder) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
}

const deleteFromCloudinary = async (publicId) => {

    try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result;
    } catch (error) {
        console.error("Failed to delete image from Cloudinary:", error);
        throw error;
    }
    // return cloudinary.uploader.destroy(publicId);
};

export  {uploadToCloudinary, upload, deleteFromCloudinary}