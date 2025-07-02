
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

export  {uploadToCloudinary, upload}