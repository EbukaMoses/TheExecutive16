import joi from "joi";

export const signupValidator = joi.object({
  email: joi.string().min(5).max(25).required().email({ tlds: { allow: ["com", "net"] } }),
  password: joi.string().required().pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?.=*d).{8,}$")),
});