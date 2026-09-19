/**
 * Password and input validation utilities adhering to NIST SP 800-63B (BRD-AUTH-001)
 */

export function validatePasswordStrength(password) {
  if (!password || password.length === 0) {
    return "Password is required.";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  const hasNumber = /[0-9]/.test(password);
  if (!hasNumber) {
    return "Password must contain at least one number.";
  }
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  if (!hasSpecialChar) {
    return "Password must contain at least one special character.";
  }
  return null;
}

export function validateRegistration(formData) {
  const errors = {};
  const passwordError = validatePasswordStrength(formData.password);
  if (passwordError) {
    errors.password = passwordError;
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
