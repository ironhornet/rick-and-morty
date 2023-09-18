import { createSlice } from '@reduxjs/toolkit';
import { ICharacterListState } from './characterList.interface';
import {
  fetchFilteredCharacters,
  fetchFilteredEpisodes,
  fetchItems,
  fetchFilteredLocations,
  fetchMultipleCharacters,
} from './characterListThunks';

const initialState = (): ICharacterListState => ({
  data: {
    info: null,
    results: null,
  },
  pageNumWithFilters: null,
  fetchingStatus: {
    characterStatus: '',
    locationStatus: '',
    episodeStatus: '',
  },
  locationCharacterIds: [],
  episodeCharacterIds: [],
  characterIds: [],
  matchedIds: [],

  episodeError: null,
  locationError: null,
  characterError: null,
  error: null,
  
  characterLoading: false,
  episodeLoading: false,
  locationLoading: false,

  loading: false,
});

const characterListSlice = createSlice({
  name: 'characterList',
  initialState: initialState(),
  reducers: {
    resetState() {
      return { ...initialState() };
    },
    updateMatchedIds(state, action) {
      state.matchedIds = action.payload;
    },
    updatePageNumber(state, action) {
      state.pageNumWithFilters = action.payload;
    },
  },
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
      })

      .addCase(fetchFilteredLocations.pending, (state) => {
        state.locationLoading = true;
        state.locationError = null;
      })
      .addCase(fetchFilteredLocations.fulfilled, (state, action) => {
        state.locationCharacterIds = action.payload;
        state.fetchingStatus.locationStatus = 'fetched';
        state.locationLoading = false;
        state.locationError = null;
      })
      .addCase(fetchFilteredLocations.rejected, (state, action) => {
        state.locationLoading = false;
        state.locationError =
          action.error.message || 'Failed to fetch locations';
      })

      .addCase(fetchFilteredEpisodes.pending, (state) => {
        state.episodeLoading = true;
        state.episodeError = null;
      })
      .addCase(fetchFilteredEpisodes.fulfilled, (state, action) => {
        state.episodeCharacterIds = action.payload;
        state.fetchingStatus.episodeStatus = 'fetched';
        state.episodeLoading = false;
        state.episodeError = null;
      })
      .addCase(fetchFilteredEpisodes.rejected, (state, action) => {
        state.episodeLoading = false;
        state.episodeError = action.error.message || 'Failed to fetch episodes';
      })

      .addCase(fetchFilteredCharacters.pending, (state) => {
        state.characterLoading = true;
        state.characterError = null;
      })
      .addCase(fetchFilteredCharacters.fulfilled, (state, action) => {
        state.characterIds = action.payload;
        state.fetchingStatus.characterStatus = 'fetched';
        state.characterLoading = false;
      })
      .addCase(fetchFilteredCharacters.rejected, (state, action) => {
        state.characterLoading = false;
        state.characterError = action.error.message || 'Failed to fetch characters';
        state.error = null;
      })

      .addCase(fetchMultipleCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMultipleCharacters.fulfilled, (state, action) => {
        state.data = {
          info: null,
          results: action.payload,
        };
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchMultipleCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch characters';
      });
  },
});

export const { resetState, updateMatchedIds, updatePageNumber } = characterListSlice.actions;

export default characterListSlice.reducer;
