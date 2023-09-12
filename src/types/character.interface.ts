interface IOriginOrLocationDto {
  name: string;
  url: string;
}

type Status = 'Alive' | 'Dead' | 'unknown';
type Species = 'Human' | 'Alien';
type Gender = 'Male' | 'Female';

export interface ICharacterDto {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: IOriginOrLocationDto;
  location: IOriginOrLocationDto;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IInfoDto {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

export interface IApiResponseDto {
  info: IInfoDto;
  results: ICharacterDto[];
}
