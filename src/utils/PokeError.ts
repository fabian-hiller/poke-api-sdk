/**
 * A Poke error.
 */
export class PokeError extends Error {
  public readonly name = 'PokeError';

  /**
   * Creates a Poke error.
   *
   * @param message The error message.
   */
  constructor(message: string) {
    super(message);
  }
}
