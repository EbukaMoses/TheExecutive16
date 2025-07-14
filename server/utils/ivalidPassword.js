import { createError } from "./error.js";


export const isValidPassword = (password) => {  
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,25}$/;
    return passwordRegex.test(password)
}

