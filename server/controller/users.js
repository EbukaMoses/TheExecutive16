import User from "../model/user.js";
import { createError } from "../utils/error.js";
import { isValidEmail } from "../utils/iValidEmail.js";


//UPDATE
export const updateUser = async (req, res, next) => {

  try {

    const userExist = await User.findById(req.params.id); // Authenticated user
    // const userToUpdate = await User.findById(req.params.id); // Target of update

    if (!isValidEmail(req.body.email)) {
      return next(createError(409, "Invalid Email Format"));
    }

    if (!userExist) {
      return next(createError(404, "Authenticated user not found"));
    }

    // Only allow the owner or an admin
    if ( userExist._id.toString() !== req.params.id && userExist.isAdmin !== 'admin') {
      return next(createError(403, "You are not authorized to update this user"));
    }

    // Check if the new email already exists in another user
    if (req.body.email) {
      const existingEmailUser = await User.findOne({ email: req.body.email });

      if (existingEmailUser && existingEmailUser._id.toString() !== req.params.id) {
        return next(createError(400, "Email already in use by another user"));
      }
    }

    // Perform the update
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

    res.status(200).json(updatedUser);

    // Authorization check: only the author can delete
    // if (User._id.toString() !== req.user.id.toString()) {
    //   return next(createError(403, "You are not authorized to do this"));
    // }    

    res.status(200).json(updatedUser);

  } catch (error) {
    if (error.code === 11000 && error.keyPattern?.email) {
      return next(createError(400, "Email already exists"));
    }
    next(error);
  }
};

//VERIFY USER
export const approveUser = async (req, res, next) => {

   try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return next(createError(404, "User not found"));
     }
     
    // Authorization check: only the author can delete
    // if (user.isAdmin !== "Admin" && user.userId.toString() === req.user.id.toString()) {
    //   return next(createError(409, "You are not authorized to Approve this blog"));
    // }

    // Toggle the status value
    user.approved = !user.approved;

    await user.save();

    res.status(200).json({
      message: `User status updated to ${user.approved ? 'active' : 'inactive'}`,
      user,
    });
  } catch (error) {
    next(error);
  }



  // try {
  //   const user = await User.findByIdAndUpdate(
  //     req.params.id,
  //     { $set: { approved: true } },
  //     { new: true }
  //   );

  //   if (!user) {
  //     return next(createError(404, "User not found"));
  //   }

  //   res.status(200).json(user);
  // } catch (error) {
  //   next(error);
  // }     

}

//DELETE
export const deleteUser = async (req, res, next) => {

  try {

    const user = await User.findById(req.params.id);
    if (!user) {
      return next(createError(404, "User not found"));
    }

    // Authorization check: only the author can delete
    // if (user.userId.toString() !== req.user.id.toString()) {
    //   return next(createError(403, "You are not authorized to delete this User"));
    // }

    await User.deleteOne(); // or Blog.findByIdAndDelete(req.params.id)
    res.status(200).json("User deleted successfully");

  } catch (error) {
    next(error);
  }






  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

     if (!deletedUser) {
      return next(createError(404, "User not found"));
    }

    res.status(200).json("user deleted successfully");
  } catch (error) {
    next(error);
  }
};

//GET
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

     if (!user) {
      return next(createError(404, "User not found"));
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

//GET ALL
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

     if (!users) {
      return next(createError(404, "User not found"));
    }

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};


