import { describe, expect, test } from 'vitest';
import { listGenerations, readGeneration } from './generation.ts';
import {
  generationI,
  generationList,
  generationListLimit2,
} from '../data/index.ts';

describe('listGenerations', () => {
  test('should return JSON response without params', async () => {
    const response = await listGenerations();
    expect(response).toStrictEqual(generationList);
  });

  test('should return JSON response with limit', async () => {
    const response = await listGenerations({ limit: 2 });
    expect(response).toStrictEqual(generationListLimit2);
  });
});

describe('readGeneration', () => {
  test('should throw error if name is empty string', async () => {
    await expect(() => readGeneration('')).rejects.toThrowError('Invalid Name');
  });

  test('should throw error if generation was not found', async () => {
    await expect(() => readGeneration('non-existent')).rejects.toThrowError(
      'Not Found'
    );
  });

  test('should return JSON response by ID', async () => {
    const response = await readGeneration(1);
    expect(response).toStrictEqual(generationI);
  });

  test('should return JSON response by name', async () => {
    const response = await readGeneration('generation-i');
    expect(response).toStrictEqual(generationI);
  });
});

// TODO: Add tests for `readGenerations`
