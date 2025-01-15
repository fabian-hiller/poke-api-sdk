// @ts-check
// Playgound to test the library

import * as poke from './dist/index.js';

try {
  const pokemon = await poke.readPokemon('ditto');
  console.log(pokemon);
} catch (error) {
  console.error(error);
}
