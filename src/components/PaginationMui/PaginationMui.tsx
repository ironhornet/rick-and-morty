import { ChangeEvent } from 'react';
import { Stack } from '@mui/material';
import { StyledPagination } from './pagination.styles';
import { IPaginationMuiProps } from './paginatiouMui.interface';

export const PaginationMui = (props: IPaginationMuiProps) => {
  const { count, onSetPageNumberHandler, currentPage } = props;

  const onChangeHandler = (e: ChangeEvent<unknown>, page: number) => {
    onSetPageNumberHandler(page);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        margin: '0 auto',
        width: '100%',
      }}
    >
      <StyledPagination
        count={count}
        shape='rounded'
        page={currentPage}
        variant='outlined'
        onChange={onChangeHandler}
      />
    </Stack>
  );
};
