import { describe, expect, test } from 'vitest';
import { listPokemons, readPokemon } from './pokemon.ts';
import { bulbasaur, pokemonList, pokemonListLimit10 } from '../data/index.ts';

describe('listPokemons', () => {
  test('should return JSON response without params', async () => {
    const response = await listPokemons();
    expect(response).toStrictEqual(pokemonList);
  });

  test('should return JSON response with limit', async () => {
    const response = await listPokemons({ limit: 10 });
    expect(response).toStrictEqual(pokemonListLimit10);
  });
});

describe('readPokemon', () => {
  test('should throw error if name is empty string', async () => {
    await expect(() => readPokemon('')).rejects.toThrowError('Invalid Name');
  });

  test('should throw error if pokemon was not found', async () => {
    await expect(() => readPokemon('non-existent')).rejects.toThrowError(
      'Not Found'
    );
  });

  test('should return JSON response by ID', async () => {
    const response = await readPokemon(1);
    expect(response).toStrictEqual(bulbasaur);
  });

  test('should return JSON response by name', async () => {
    const response = await readPokemon('bulbasaur');
    expect(response).toStrictEqual(bulbasaur);
  });
});

// TODO: Add tests for `readPokemons`
