import { combineReducers } from '@reduxjs/toolkit';

import characterListSlice from '../features/CharacterList/characterList.slice'

export const rootReducer = combineReducers({
  characterList: characterListSlice,
});
