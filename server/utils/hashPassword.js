import bcrypt from "bcryptjs";

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

const verifyPassword = async (password, DBpassword) => {
    const confirmPassword = await bcrypt.compare(password, DBpassword);
    return confirmPassword;
}

export { hashPassword, verifyPassword };
