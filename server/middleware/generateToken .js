import jwt from "jsonwebtoken";

// JWT utility (or put this in a separate helper file)
export const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
  );
};