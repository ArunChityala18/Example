/**
 * Validates password strength according to BRD-AUTH-001.
 * 
 * @param {string} password - The password string to validate.
 * @returns {string|null} - Returns an error message string if invalid, or null if valid.
 */
export function validatePasswordStrength(password) {
  if (password === undefined || password === null || password === '') {
    return 'Password is required.';
  }

  if (typeof password !== 'string') {
    password = String(password);
  }

  if (password.length < 8) {
    return 'Password must be at least 8 characters long.';
  }

  const hasNumber = /[0-9]/.test(password);
  if (!hasNumber) {
    return 'Password must contain at least one number.';
  }

  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  if (!hasSpecialChar) {
    return 'Password must contain at least one special character.';
  }

  return null;
}
