import { Pagination } from '@mui/material';
import styled from 'styled-components';

export const StyledPagination = styled(Pagination)`
  color: black;

  .MuiPaginationItem-root {
    color: #f5f5f5;
    background-color: #3c3e44;
    &:hover {
      background-color: rgb(236 228 228 / 15%);
    }
  }

  .MuiPaginationItem-page.Mui-selected {
    color: #202329;
    background-color: #f5f5f5;
  }

  .MuiPaginationItem-root.Mui-disabled {
    color: #272b33;
    background-color: #9e9e9e;
  }
`;
