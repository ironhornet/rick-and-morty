import { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ISelectMuiProps } from './selectMui.interface';
import { CATEGORY_KEY_ENUM } from '../Filter/filter.interface';

export const SelectMui = (props: ISelectMuiProps) => {
  const { 
    categories, 
    values, 
    setFieldValue, 
    initialValues,
  } =
    props;
  const [isFocused, setIsFocused] = useState(false);

  const getRenderValue = (selected: string[]) => {
    return selected
      .map((value) => {
        return categories.find((cat) => cat.key === value)?.name;
      })
      .join(', ');
  };

  const isSelectedOptions = values.selectedOptions.length > 0;

  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const eventValue = Array.isArray(event.target.value) ? event.target.value : [event.target.value];
    const newValues: CATEGORY_KEY_ENUM[] = eventValue.map((val) => val as CATEGORY_KEY_ENUM);

    const currentOptions = values.selectedOptions as CATEGORY_KEY_ENUM[];

    const resetValues = {
      [CATEGORY_KEY_ENUM.CHARACTER]: () => setFieldValue('character', initialValues.character),
      [CATEGORY_KEY_ENUM.LOCATION]: () => setFieldValue('location', initialValues.location),
      [CATEGORY_KEY_ENUM.EPISODES]: () => setFieldValue('episodes', initialValues.episodes),
    };

    currentOptions.forEach((option: CATEGORY_KEY_ENUM) => {
      if (!newValues.includes(option) && resetValues[option]) {
        resetValues[option]();
      }
    });

    setFieldValue('selectedOptions', newValues);
  };

  return (
    <Box
      sx={{
        minWidth: 270,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <FormControl
        fullWidth
        size='small'
        sx={{
          '&.MuiInputLabel-formControl': {
            display: 'none',
          },
        }}
      >
        {!isFocused && !isSelectedOptions && (
          <InputLabel shrink={false}>Select Options</InputLabel>
        )}
        <Select
          size='small'
          multiple
          renderValue={getRenderValue}
          onOpen={() => setIsFocused(true)}
          onClose={() => setIsFocused(false)}
          onChange={handleSelectChange}
          value={values.selectedOptions}
          sx={{
            backgroundColor: '#F5F5F5',
            color: '#272B33',
          }}
        >
          {categories.map((category) => (
            <MenuItem key={category.key} value={category.key}>
              <Checkbox checked={values.selectedOptions.includes(category.key)} />
              <ListItemText primary={category.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
