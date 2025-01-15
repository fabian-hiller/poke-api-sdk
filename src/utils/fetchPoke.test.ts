import { describe, expect, test } from 'vitest';
import { fetchPoke } from './fetchPoke.ts';
import { bulbasaur, pokemonList, pokemonListLimit10 } from '../data/index.ts';

describe('fetchPoke', () => {
  test('should throw error if name is empty string', async () => {
    await expect(() =>
      fetchPoke({ endpoint: 'pokemon', idOrName: '' })
    ).rejects.toThrowError('Invalid Name');
  });

  test('should throw error if request was not successfull', async () => {
    await expect(() =>
      fetchPoke({ endpoint: 'pokemon', idOrName: 'non-existent' })
    ).rejects.toThrowError('Not Found');
    await expect(() =>
      fetchPoke({
        // @ts-expect-error - Testing invalid endpoint
        endpoint: 'non-existent',
        idOrName: 123,
      })
    ).rejects.toThrowError('Not Found');
  });

  test('should return JSON response without ID or name', async () => {
    const response = await fetchPoke({
      endpoint: 'pokemon',
    });
    expect(response).toStrictEqual(pokemonList);
  });

  test('should return JSON response uing search params', async () => {
    const response = await fetchPoke({
      endpoint: 'pokemon',
      params: { limit: '10' },
    });
    expect(response).toStrictEqual(pokemonListLimit10);
  });

  test('should return JSON response by ID', async () => {
    const response = await fetchPoke({ endpoint: 'pokemon', idOrName: 1 });
    expect(response).toStrictEqual(bulbasaur);
  });

  test('should return JSON response by name', async () => {
    const response = await fetchPoke({
      endpoint: 'pokemon',
      idOrName: 'bulbasaur',
    });
    expect(response).toStrictEqual(bulbasaur);
  });
});
