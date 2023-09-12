import React, { useState } from 'react';
import { 
  Button, 
  Menu, 
  MenuItem, 
  TextField, 
} from '@mui/material';
import { IDropDownWithInputs } from './dropDownWithInputs.interface';
import { ICategory } from '../Filter/filter.interface';

export const DropDownWithInputs = (props: IDropDownWithInputs) => {
  const { 
    getFieldProps, 
    categories, 
    setFieldValue, 
    values, 
  } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const selectedCategories: string[] = getFieldProps('selectedOptions').value;

  const getCategories = (): ICategory[] => {
    return selectedCategories.flatMap((selectedCat) => {
      const foundCategory = categories.find((cat) => selectedCat === cat.key);

      return foundCategory ? [foundCategory] : [];
    });
  };

  const categoriesOptions = getCategories();
  
  const onChangeHandler = (nameOfField: string, val: string) => setFieldValue(nameOfField, val);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <Button
        disabled={!categoriesOptions.length}
        sx={{
          minWidth: 270,
          height: '100%',
          backgroundColor: '#F5F5F5',
          color: '#272B33',
          textTransform: 'unset',
          justifyContent: 'start',
          '&:hover': {
            backgroundColor: '#F5F5F5',
          },
        }}
        onClick={handleClick}
      >
        Add keywords to find
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableAutoFocusItem
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiPaper-root': {
            minWidth: 270,
          },
        }}
        
      >
        {categoriesOptions.map((category) => category.options.map((option) => (
          <MenuItem key={option.label}>
            <TextField
              label={option.label}
              value={(values as any)[category.key.toLowerCase()][option.value]} // eslint-disable-line
              onChange={(e) => onChangeHandler(`${category.key.toLowerCase()}.${option.value}`, e.target.value)}
              size='small'
              fullWidth
              onKeyDown={(e) => {
                if (e.key === 'a') {
                  e.stopPropagation();
                }
              }}
            />
          </MenuItem>
        )))}
      </Menu>
    </div>
  );
};
