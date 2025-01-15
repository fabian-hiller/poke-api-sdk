# PokeAPI SDK

This is a modular and type-safe SDK for the [PokeAPI](https://pokeapi.co/).

> **Note:** This project is still in development and not yet published to npm.

## Highlights

- Implemented with TypeScript in mind
- Modular design starting at less than 330 bytes
- No dependencies and based on the Fetch API
- Fully tested with 100% coverage

## Example

By using a wildcard import, this SDK provides full IntelliSense support in VS Code, while still using a static import to allow tree shaking. IntelliSense auto-completion has the advantage that when you type `poke.` in your editor, you automatically see all the available functions and types of the SDK. This allows you to easily explore the SDK without having to look at the documentation.

```ts
import * as poke from 'poke-api-sdk';

try {
  const pokemon = await poke.readPokemon('ditto');
  console.log(pokemon);
} catch (error) {
  console.error(error);
}
```

## Getting Started

Step 1: Clone repository

```bash
git clone git@github.com:fabian-hiller/poke-api-sdk.git
```

Step 2: Install dependencies

```bash
pnpm install
```

Step 3: Build library

```bash
pnpm build
```

## Playground

For testing purposes, you can add code to the `playground.mjs` file and run the following command to execute it:

```bash
pnpm play
```

## Testing

This library is tested with Vitest. To run the tests, execute the following command:

```bash
pnpm test
```

## Reference

We currently support the following function and endpoints. See the source code for more information.

| Function                           | Endpoints                                          |
| ---------------------------------- | -------------------------------------------------- |
| [`listPokemons`][pokemon.ts]       | `GET /pokemon/`                                    |
| [`readPokemon`][pokemon.ts]        | `GET /pokemon/{id or name}`                        |
| [`readPokemons`][pokemon.ts]       | `GET /pokemon/`, `GET /pokemon/{id or name}`       |
| [`listGenerations`][generation.ts] | `GET /generation/`                                 |
| [`readGeneration`][generation.ts]  | `GET /generation/{id or name}`                     |
| [`readGenerations`][generation.ts] | `GET /generation/`, `GET /generation/{id or name}` |

[pokemon.ts]: https://github.com/fabian-hiller/poke-api-sdk/blob/main/src/endpoints/pokemon.ts
[generation.ts]: https://github.com/fabian-hiller/poke-api-sdk/blob/main/src/endpoints/generation.ts
