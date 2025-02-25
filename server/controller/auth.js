import User from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  try {
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const confirmPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!confirmPassword)
      return next(createError(400, "Wrong Password or Email!"));
      
      const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);

    const { password, isAdmin, ...otherDetails } = user._doc;
    res.cookie("access_token", token, { httpOnly: true,}).status(200).json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};
