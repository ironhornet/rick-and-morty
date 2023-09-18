import { ICharacter } from '../../../components/Filter/filter.interface';
import { ICharacterDto, IInfoDto } from '../../../types/character.interface';

export interface ICharacterListState {
  data: {
    info: IInfoDto | null;
    results: ICharacterDto[] | null;
  };
  pageNumWithFilters: number | null;
  fetchingStatus: {
    characterStatus: string,
    locationStatus: string,
    episodeStatus: string,
  }
  episodeCharacterIds: number[];
  locationCharacterIds: number[];
  characterIds: number[];
  matchedIds: number[][]
  episodeLoading: boolean;
  locationLoading: boolean;
  characterLoading: boolean;
  episodeError: string | null;
  locationError: string | null;
  characterError: string | null;
  loading: boolean;
  error: string | null;
}

export interface ILocationData {
  residents: string[];
}

export interface IEpisodeData {
  characters: string[];
}

export interface ILocationResponse {
  info: IInfoDto | null;
  results: ILocationData[] | null;
}

export interface IEpisodeResponse {
  info: IInfoDto | null;
  results: IEpisodeData[] | null;
}

export interface ICharacterQueries extends Partial<ICharacter> {
  page?: number;
}
