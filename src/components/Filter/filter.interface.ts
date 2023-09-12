export enum CATEGORY_KEY_ENUM {
  CHARACTER = 'CHARACTER',
  LOCATION = 'LOCATION',
  EPISODES = 'EPISODES',
}

export interface IOption {
  label: string;
  value: string;
}

export interface ICategory {
  name: string;
  key: CATEGORY_KEY_ENUM;
  options: IOption[];
}

interface ICharacter {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

interface ILocation {
  name: string;
  type: string;
  dimensions: string;
}

interface IEpisodes {
  name: string;
  episodes: string;
}

export interface IInitialValues {
  selectedOptions: string[];
  character: ICharacter;
  location: ILocation;
  episodes: IEpisodes;
}
