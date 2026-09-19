import test from 'node:test';
import assert from 'node:assert';
import { validatePasswordStrength, validateRegistration } from '../src/utils/validation.js';

test('Password validation - empty password', () => {
  assert.strictEqual(validatePasswordStrength(''), 'Password is required.');
  assert.strictEqual(validatePasswordStrength(null), 'Password is required.');
});

test('Password validation - minimum length requirement', () => {
  assert.strictEqual(validatePasswordStrength('Ab1!'), 'Password must be at least 8 characters long.');
});

test('Password validation - missing number requirement', () => {
  assert.strictEqual(validatePasswordStrength('Password!'), 'Password must contain at least one number.');
});

test('Password validation - missing special character requirement', () => {
  assert.strictEqual(validatePasswordStrength('Password123'), 'Password must contain at least one special character.');
});

test('Password validation - valid password', () => {
  assert.strictEqual(validatePasswordStrength('Password123!'), null);
});

test('Registration validation wrapper', () => {
  const result = validateRegistration({ password: 'Weak' });
  assert.strictEqual(result.isValid, false);
  assert.strictEqual(result.errors.password, 'Password must be at least 8 characters long.');
});
