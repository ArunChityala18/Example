import test from 'node:test';
import assert from 'node:assert';
import { validatePasswordStrength } from '../src/utils/validation.js';

test('Password validation - Empty password', () => {
  const result = validatePasswordStrength('');
  assert.strictEqual(result, 'Password is required.');
});

test('Password validation - Too short', () => {
  const result = validatePasswordStrength('Ab1!');
  assert.strictEqual(result, 'Password must be at least 8 characters long.');
});

test('Password validation - Missing number', () => {
  const result = validatePasswordStrength('Abcdefgh!');
  assert.strictEqual(result, 'Password must contain at least one number.');
});

test('Password validation - Missing special character', () => {
  const result = validatePasswordStrength('Abcdefg1');
  assert.strictEqual(result, 'Password must contain at least one special character.');
});

test('Password validation - Compliant password', () => {
  const result = validatePasswordStrength('SecureP@ss1');
  assert.strictEqual(result, null);
});
