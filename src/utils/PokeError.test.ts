import { describe, expect, test } from 'vitest';
import { PokeError } from './PokeError.ts';

describe('PokeError', () => {
  test('should create error instance', () => {
    const message = 'An error occurred';
    const error = new PokeError(message);
    expect(error).toBeInstanceOf(PokeError);
    expect(error.name).toBe('PokeError');
    expect(error.message).toBe(message);
  });
});
