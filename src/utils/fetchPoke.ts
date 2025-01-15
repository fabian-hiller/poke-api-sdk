import { PokeError } from './PokeError.ts';

type FetchOptions = {
  endpoint: 'generation' | 'pokemon';
  idOrName?: number | string;
  params?: Record<string, string | number>;
};

/**
 * Sends a fetch request to the PokeAPI and returns the JSON response.
 *
 * @param options The fetch options.
 *
 * @returns The JSON response.
 */
export async function fetchPoke<TData>(options: FetchOptions): Promise<TData> {
  // Throw a Poke error if name is empty string
  if (options.idOrName === '') {
    throw new PokeError('Invalid Name');
  }

  // Create URL object
  const url = new URL(
    `https://pokeapi.co/api/v2/${options.endpoint}/${options.idOrName ? `${options.idOrName}` : ''}`
  );

  // Add search params if necessary
  if (options.params) {
    for (const [key, value] of Object.entries(options.params)) {
      url.searchParams.append(key, `${value}`);
    }
  }

  // Send fetch request to PokeAPI
  const response = await fetch(url);

  // Throw a Poke error if request was not successfull
  if (!response.ok) {
    throw new PokeError(await response.text());
  }

  // Otherwise return JSON response
  return await response.json();
}
