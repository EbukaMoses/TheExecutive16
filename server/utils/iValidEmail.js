 // Email validation function using regex
export const isValidEmail = (email) => {
      const mail = email.trim()
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(mail);
  }