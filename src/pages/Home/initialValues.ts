import { IInitialValues } from '../../components/Filter/filter.interface';

export const initialValues: IInitialValues = {
  selectedOptions: [],
  character: {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  },
  location: {
    name: '',
    type: '',
    dimensions: '',
  },
  episodes: {
    episodes: '',
  },
};
