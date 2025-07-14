import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    firstname: {
      type: String,
      required: [true, "First name is required"],
    },
    lastname: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
      minLength: [5, "Email must be at least 5 characters long"],
      maxLength: [25, "Email must be at most 15 characters long"],
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      select: false,
    },
    phone: {
      type: Number,
      // required: [true, "Phone is required"],
      trim: true,
      minLength: [10, "Phone must be at least 10 characters long"],
      maxLength: [15, "Phone must be at most 15 characters long"],
      match: [
        /^\d{10}$/,
        "Please enter a valid phone number",
      ],
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
      type: String,
      default: "member",
      // select: false,
    },
    approved: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
      // required: [true, "isVerified is required"],
    },
    verificationCode: {
      type: String,
      select: false,
    },
    verificationCodeValidation: {
      type: Number,
      select: false,
    },
    forgotPasswordCode: {
      type: String,
      select: false,
    },
    forgotPasswordCodeValidation: {
      type: Number,
      select: false,
    },
    accessToken: {
      type: String,
      select: false,
    },
    resetPasswordCode: {
      type: String,
      select: false,
    },
    resetPasswordExpire: {
      type: Date,
      select: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
