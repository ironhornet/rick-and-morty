import {
  ICharacterDto,
  IInfoDto,
} from '../../../types/character.interface';


export interface IUseFetchItems {
  data: {
    info: IInfoDto | null;
    results: ICharacterDto[] | null;
  };
  loading: boolean;
  pageNumber: number;
  updatePageNumber: (num: number) => void;
}
