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

export interface ICharacter {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export interface ILocation {
  name: string;
  type: string;
  dimensions: string;
}

export interface IEpisodes {
  episodes: string;
}

export interface IInitialValues {
  selectedOptions: string[];
  character: ICharacter;
  location: ILocation;
  episodes: IEpisodes;
}
