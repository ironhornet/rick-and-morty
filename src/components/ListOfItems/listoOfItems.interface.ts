import { ICharacterDto, IInfoDto } from '../../types/character.interface';

interface IData {
  info: IInfoDto | null;
  results: ICharacterDto[] | null;
}

export interface IListOfItemsProps {
  data: IData;
  pageNumber: number;
  updatePageNumber: (value: number) => void;
  error: (string | null)[];
  amountPages: number;
}
