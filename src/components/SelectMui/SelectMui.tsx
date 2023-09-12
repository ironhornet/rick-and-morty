import { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material';
import { ISelectMuiProps } from './selectMui.interface';

export const SelectMui = (props: ISelectMuiProps) => {
  const { getFieldProps, categories, values } = props;
  const [isFocused, setIsFocused] = useState(false);

  const getRenderValue = (selected: string[]) => {
    return selected
      .map((value) => {
        return categories.find((cat) => cat.key === value)?.name;
      })
      .join(', ');
  };

  const isSelectedOptions = values.selectedOptions.length > 0;

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
        {!isFocused && !isSelectedOptions && <InputLabel shrink={false}>Select Options</InputLabel>}
        <Select
          size='small'
          multiple
          renderValue={getRenderValue}
          onOpen={() => setIsFocused(true)}
          onClose={() => setIsFocused(false)}
          {...getFieldProps('selectedOptions')}
          sx={{
            backgroundColor: '#F5F5F5',
            color: '#272B33',
          }}
        >
          {categories.map((category) => (
            <MenuItem key={category.key} value={category.key}>
              <Checkbox
                checked={getFieldProps('selectedOptions').value.includes(
                  category.key
                )}
              />
              <ListItemText primary={category.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
