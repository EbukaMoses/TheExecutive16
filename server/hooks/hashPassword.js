import bcrypt from "bcryptjs";


exports.hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}



exports.hashPassword = (password, DBpassword) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const confirmPassword = bcrypt.compareSync(hash, DBpassword);
    return confirmPassword;
}
