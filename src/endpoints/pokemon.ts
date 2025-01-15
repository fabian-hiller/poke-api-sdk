import { PaginationParams, Pokemon, PokemonList } from '../types/index.ts';
import { fetchPoke } from '../utils/index.ts';

/**
 * Lists the available pokemons.
 *
 * @param params The pagination parameters.
 *
 * @returns The list of pokemons.
 */
export function listPokemons(params?: PaginationParams): Promise<PokemonList> {
  return fetchPoke<PokemonList>({ endpoint: 'pokemon', params });
}

/**
 * Reads a single pokemon by its ID or name.
 *
 * @param idOrName The ID or name of the pokemon.
 *
 * @returns The pokemon if found.
 */
export function readPokemon(idOrName: number | string): Promise<Pokemon> {
  return fetchPoke<Pokemon>({ endpoint: 'pokemon', idOrName });
}

/**
 * Reads multiple pokemons.
 *
 * @param params The pagination parameters.
 *
 * @returns An array of pokemons.
 */
export async function readPokemons(
  params?: PaginationParams
): Promise<Pokemon[]> {
  const pokemonList = await listPokemons(params);
  return Promise.all(
    pokemonList.results.map(async (pokemon) => readPokemon(pokemon.name))
  );
}
