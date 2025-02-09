import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      // unique: true,
    },
    password: {
      type: String,
    //   required: true,
    },
    phone: {
      type: String,
    },
    gender: {
      type: String,
    },
    dob: {
      type: String,
    },
    maritalstatus: {
      type: String,
    },
    stateoforign: {
      type: String,
    },
    profession: {
      type: String,
    },
    position: {
      type: String,
    },
    secondaryschool: {
      type: String,
    },
    yearofgrad: {
      type: String,
    },
    hobby: {
      type: [String],
    },
    linkedin: {
      type: String,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    twitter: {
      type: String,
    },
    snapchat: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    description: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
