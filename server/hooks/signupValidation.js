exports.signupValidator = joi.object({

    email: joi.string().min(6).max(60).required().email({ tlds: { allow: ['com', 'net'] } });
    password: joi().required().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?.=*d).{8,}$'))

})