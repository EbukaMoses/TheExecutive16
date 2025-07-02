import User from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js";
import { isValidEmail } from "../middleware/iValidEmail.js";

export const register = async (req, res, next) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  // const confirmPassword = req.body.cpassword;

  //name validation
  if (!firstname || !lastname || !email || !password) {
    return next(createError(400, "Input can't be empty!!!"));
  }

  if (!firstname.match(/^[a-zA-Z0-9]+$/)) {
    return next(createError(400, "Firstname shouldn't have special characters"));
  }

  if (!lastname.match(/^[a-zA-Z0-9]+$/)) {
    return next(createError(400, "Lastname shouldn't have special characters"));
  }

  if (!isValidEmail(email)) {
    return next(createError(400, "Invalid Email Format"));
  }

  if (password.length < 6) {
    return next(createError(400, "Password must not be less than 6 characters"));
  }

  if (password.length > 12) {
    return next(createError(400, "Password must not be more than 12 characters"));
  }

  // if (password != confirmPassword) {
  //    next(createError(400, "Password and confirm password mismatch!!!"));
  // }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  try {
    //checking if user exist
    const userExist = await User.findOne({ email });
    if (userExist) {
      next(createError(401, "User Already Exist!!!"));
      console.log("User Already Exist!!!")
      // return;
    }

    //creating new user
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {

  const { email, password } = req.body;

  // Email validation function using regex
  if (email && isValidEmail(email)) return next(createError(400, "Invalid Email Format"));

  //password validation
  if (password && password.length < 6) return next(createError(400, "Password must not be less than 6 characters"));
  if (password && password.length < 12) return next(createError(400, "Password must not be more than 12 characters"))

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  try {
    const user = await User.findOne({ email: email });
    if (!user) return next(createError(404, "User not found!"));

    const confirmPassword = bcrypt.compareSync(
      password,
      user.password
    );
    if (!confirmPassword)
      return next(createError(400, "Invalid Credentials"));
      
      const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);

    const { password, isAdmin, ...otherDetails } = user._doc;
    res.cookie("access_token", token, { httpOnly: true,}).status(200).json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};
