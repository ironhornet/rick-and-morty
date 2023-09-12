import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../api/instances/axiosInstance';
import { ICharacterDto, IInfoDto } from '../../../types/character.interface';

export interface ICharacterListState {
  data: {
    info: IInfoDto | null;
    results: ICharacterDto[] | null;
  };
  loading: boolean;
  error: string | null;
}

export const fetchItems = createAsyncThunk<
  ICharacterListState['data'],
  number | undefined
>('characterList/fetchItems', async (page: number = 1) => {
  const response = await axiosInstance.get(`character?page=${page}`);
  
  return response.data;
});

const initialState = (): ICharacterListState => ({
  data: {
    info: null,
    results: null,
  },
  loading: false,
  error: null,
});

const characterListSlice = createSlice({
  name: 'characterList',
  initialState: initialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch items';
      });
  },
});

export default characterListSlice.reducer;
