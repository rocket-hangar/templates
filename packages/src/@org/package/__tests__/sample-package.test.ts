import { yourFunction } from '@org/package';
import { describe, expect, test } from 'vitest';

describe('sample-package', () => {
  test('should print Hello World!', () => {
    expect(yourFunction()).toBe('Hello World!');
  });
});
