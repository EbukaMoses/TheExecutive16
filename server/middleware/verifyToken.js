import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not an Admin"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

//verifyUser — Allow: Access to self Or access if user is admin
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin === "admin") {
         next();
    }else{
        return next(createError(403, "Access denied — not your account."));
    }
  });
};

//verifyAdmin — Strictly admin-only routes
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin === 'admin') {
         next();
    }else{
        return next(createError(403, "Access denied — admins only."));
    }
  });
};


// export const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return next(createError(401, "Access Denied"));

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return next(createError(403, "Invalid Token"));
//     req.user = user; // should contain user.id
//     next();
//   });
// };