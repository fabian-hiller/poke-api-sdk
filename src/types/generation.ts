export type GenerationList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
};

export type Generation = {
  abilities: Array<{
    name: string;
    url: string;
  }>;
  id: number;
  main_region: {
    name: string;
    url: string;
  };
  moves: Array<{
    name: string;
    url: string;
  }>;
  name: string;
  names: Array<{
    language: {
      name: string;
      url: string;
    };
    name: string;
  }>;
  pokemon_species: Array<{
    name: string;
    url: string;
  }>;
  types: Array<{
    name: string;
    url: string;
  }>;
  version_groups: Array<{
    name: string;
    url: string;
  }>;
};
