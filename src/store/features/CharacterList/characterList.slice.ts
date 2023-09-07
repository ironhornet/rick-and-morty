import { createSlice } from '@reduxjs/toolkit';

const initialState = (): any => ({
  data: {},
});

const characterListSlice = createSlice({
  name: 'characterList',
  initialState: initialState(),
  reducers: {
  },
});

export default characterListSlice.reducer;
