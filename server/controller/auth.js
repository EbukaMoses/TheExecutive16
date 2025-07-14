import User from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js";
import { isValidEmail } from "../utils/iValidEmail.js";
import { hashPassword, verifyPassword } from "../utils/hashPassword.js";
import { isValidPassword } from "../utils/ivalidPassword.js";

//REGISTER FUNCTION
export const register = async (req, res, next) => {
  const {firstname , lastname, email, password, cpassword: confirmPassword} = req.body;
  // const confirmPassword = req.body.cpassword;

  if (!firstname || !lastname || !email || !password) {
    return next(createError(409, "Input can't be empty!!!"));
  }

  if (!firstname.match(/^[a-zA-Z]+$/)) {
    return next(createError(409, "Firstname shouldn't have special characters"));
  }

  if (!lastname.match(/^[a-zA-Z]+$/)) {
    return next(createError(409, "Lastname shouldn't have special characters"));
  }

  if (!isValidEmail(email)) {
    return next(createError(409, "Invalid Email Format"));
  }

  // Validate password
  if (!isValidPassword(password)) {
    return next(createError(409, "Password Invalid format"));
  }

  if (password != confirmPassword) {
     return next(createError(409, "Password and confirm password Mismatch!!!"));
  }

  // 🔐 Hash the password
  const hashedPassword = await hashPassword(password);

  try {
  
    //trimming the email
    const mail = email.trim().toLowerCase();

    //checking if user exist
    const userExist = await User.findOne({ email: mail });
    if (userExist) {
      next(createError(401, "User Already Exist!!!"));
      console.log("User Already Exist!!!");
      return;
    }    

    //creating new user
    const newUser = new User({
      firstname,
      lastname,
      email: mail,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
    message: "User registered successfully.",
    user: {
      id: newUser._id,
      email: newUser.email,
      username: newUser.username
      }
    });

  } catch (error) {
    next(error);
  }
};

// LOGIN FUNCTION 
export const login = async (req, res, next) => {

  const { email, password } = req.body;

  // Email validation function using regex
  if (email && !isValidEmail(email)) return next(createError(409, "Invalid Email Format"));

  if (password.length < 8) {
      return next(createError(409, "Password must not be less than 8 characters"));
  }

  if (password.length > 25) {
  return next(createError(409, "Password must not be more than 25 characters"));
  }

  //password validation
  if (password && !isValidPassword(password)) {
    return next(createError(409, "Invalid Password Format"));
  }  

  const mail = email.trim().toLowerCase();

  try {

    const user = await User.findOne({ email: mail }).select("+password");
    if (!user) return next(createError(404, "User not found!"));

    const match  = await verifyPassword(password, user.password);
    if (!match ) return next(createError(401, "Invalid Credentials"));
    
    const token = jwt.sign({ id: user._id, email: user.email, verified: user.isVerified, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "1d" });

    const { password: _, ...otherDetails } = user._doc;

    // res.cookie("access_token", token, { httpOnly: true }).status(200).json({ message: "Login successful", ...otherDetails });

    res.cookie("access_token", token, {
    expires: new Date(Date.now() + 24 * 3600000), 
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // ✅ only HTTPS in production
      sameSite: "strict",
    }).status(200).json({ message: "Login successful", ...otherDetails });
    

    res.status(201).json(otherDetails);
    
  } catch (error) {
    next(error);
  }
};

//LOGOUT FUNCTION
export const logout = async (req, res, next) => {
  try {

     const token = req.cookies?.access_token;

    if (!token) {
      return next(createError(409, "No token to clear"));
    }

    res.clearCookie("access_token", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production", // only use secure in production
    });

    res.status(200).json({ message: "Logout successful" });
    
  } catch (error) {
    next(error);
  }
}
