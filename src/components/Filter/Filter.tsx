import { FC, useState } from 'react';

import { ButtonMui } from '../ButtonMui/ButtonMui';

import { SelectMui } from '../SelectMui/SelectMui';
import { DropDownWithInputs } from '../DropDownWithInputs/DropDownWithInputs';
import { FilterWrapper, FormElementsWrapper } from './filter.styles';
import { saveToLocalStorage } from '../../shared/helpers/saveToLocalStorage';
import { 
  CATEGORY_KEY_ENUM, 
  ICategory, 
  ICharacter, 
  IEpisodes, 
  IInitialValues, 
  ILocation, 
} from './filter.interface';
import { FormWithFormik } from '../FormWithFormik/FormWithFormik';

const categories: ICategory[] = [
  {
    name: 'Character',
    key: CATEGORY_KEY_ENUM.CHARACTER,
    options: [
      { label: 'Add Name(Character)', value: 'name' },
      { label: 'Add Status', value: 'status' },
      { label: 'Add Species', value: 'species' },
      { label: 'Add Type(Character)', value: 'type' },
      { label: 'Add Gender', value: 'gender' },
    ],
  },
  {
    name: 'Location',
    key: CATEGORY_KEY_ENUM.LOCATION,
    options: [
      { label: 'Add Name(Location)', value: 'name' },
      { label: 'Add Type(Location)', value: 'type' },
      { label: 'Add Dimensions', value: 'dimensions' },
    ],
  },
  {
    name: 'Episodes',
    key: CATEGORY_KEY_ENUM.EPISODES,
    options: [
      { label: 'Add Episodes', value: 'episodes' },
    ],
  },
];

interface IFilterProps {
  initialValues: IInitialValues;
  onSubmitHandler: (
    location: ILocation,
    episodes: IEpisodes,
    character: ICharacter
  ) => void;
  onReset: () => void;
}

export const Filter: FC<IFilterProps> = ({
  initialValues,
  onSubmitHandler,
  onReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      onReset();
    }
  };

  const onSubmit = (values: IInitialValues) => {
    const { location, episodes, character } = values;

    onSubmitHandler(location, episodes, character);
    saveToLocalStorage('filterHistory', { location, episodes, character });
  };

  return (
    <FilterWrapper>
      <ButtonMui
        text={isOpen ? 'REMOVE FILTER' : 'FILTER'}
        onCLickHandler={isOpenHandler}
      />
      {isOpen && (
        <FormWithFormik<IInitialValues>
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <FormElementsWrapper>
              <SelectMui {...formik} categories={categories} />
              <DropDownWithInputs {...formik} categories={categories} />
              <ButtonMui
                disabled={!formik.dirty}
                text='FIND'
                onCLickHandler={formik.submitForm}
              />
            </FormElementsWrapper>
          )}
        </FormWithFormik>
      )}
    </FilterWrapper>
  );
};
