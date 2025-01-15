import {
  Generation,
  GenerationList,
  PaginationParams,
} from '../types/index.ts';
import { fetchPoke } from '../utils/index.ts';

/**
 * Lists the available generations.
 *
 * @param params The pagination parameters.
 *
 * @returns The list of generations.
 */
export function listGenerations(
  params?: PaginationParams
): Promise<GenerationList> {
  return fetchPoke<GenerationList>({ endpoint: 'generation', params });
}

/**
 * Reads a single generation by its ID or name.
 *
 * @param idOrName The ID or name of the generation.
 *
 * @returns The generation if found.
 */
export function readGeneration(idOrName: number | string): Promise<Generation> {
  return fetchPoke<Generation>({ endpoint: 'generation', idOrName });
}

/**
 * Reads multiple generations.
 *
 * @param params The pagination parameters.
 *
 * @returns An array of generations.
 */
export async function readGenerations(
  params?: PaginationParams
): Promise<Generation[]> {
  const generationList = await listGenerations(params);
  return Promise.all(
    generationList.results.map(async (generation) =>
      readGeneration(generation.name)
    )
  );
}
