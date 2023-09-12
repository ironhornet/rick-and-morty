import { useState } from 'react';

import { ButtonMui } from '../ButtonMui/ButtonMui';
import { FormWithFormik } from '../FormWithFormik/FormWithFormik';
import {
  CATEGORY_KEY_ENUM,
  ICategory,
  IInitialValues,
} from './filter.interface';
import { SelectMui } from '../SelectMui/SelectMui';
import { DropDownWithInputs } from '../DropDownWithInputs/DropDownWithInputs';
import { FilterWrapper, FormElementsWrapper } from './filter.styles';
import { saveToLocalStorage } from '../../shared/helpers/saveToLocalStorage';

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
      { label: 'Add Name(Episodes)', value: 'name' },
      { label: 'Add Episodes', value: 'episodes' },
    ],
  },
];

const initialValues: IInitialValues = {
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
    name: '',
    episodes: '',
  },
};

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenhandler = () => {
    setIsOpen(!isOpen);
  };

  const onSubmitHandler = (values: IInitialValues) => {
    const { location, episodes, character } = values;

    saveToLocalStorage('filterHistory', { location, episodes, character });
  };

  const areAllValuesEmpty = (values: IInitialValues) => {
    const keys: (keyof IInitialValues)[] = ['character', 'location', 'episodes'];
  
    return keys.every((category) => {
      return Object.values(values[category]).every((value) => value === '');
    });
  };
  
  return (
    <FilterWrapper>
      <ButtonMui
        text={isOpen ? 'REMOVE FILTER' : 'FILTER'}
        onCLickHandler={isOpenhandler}
      />
      {isOpen && (
        <FormWithFormik<IInitialValues>
          initialValues={initialValues}
          onSubmit={onSubmitHandler}
        >
          {(formik) => {
            return (
              <FormElementsWrapper>
                <SelectMui {...formik} categories={categories} />
                <DropDownWithInputs {...formik} categories={categories} />
                <ButtonMui
                  disabled={areAllValuesEmpty(formik.values)}
                  text='FIND'
                  onCLickHandler={formik.submitForm}
                />
              </FormElementsWrapper>
            );
          }}
        </FormWithFormik>
      )}
    </FilterWrapper>
  );
};
